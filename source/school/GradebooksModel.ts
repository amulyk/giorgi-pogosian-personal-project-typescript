import { LMSModel } from "./LMSModel";

export class GradebooksModel {

    private database: Map<string, object>;

    constructor(groups: GroupsModelConfig, teachers: TeachersModelConfig, lms: LMSModel) {

        this.database = new Map<string, object>();

        this.database.set("groups", groups);
        this.database.set("teachers", teachers);
        this.database.set("lms", lms);
        this.database.set("gradebooks", new Map());
    }

    public async add(level: number, groupId: string) {
        const id = String(Math.floor(Math.random() * new Date().getTime()));
        const gradebook = Object.create(Object.prototype, {
            groupId: {
                enumerable: true,
                value: groupId,
                writable: true,
            },
            id: {
                enumerable: true,
                value: id,
            },
            level: {
                enumerable: true,
                value: level,
                writable: true,
            },
            records: {
                value: [],
            },
        });

        const gradebooks = this.database.get("gradebooks");

        gradebooks.set(id, gradebook);
        return id;
    }

    public async clear() {
        const gradebooks = this.database.get("gradebooks");
        return gradebooks.clear();
    }

    public async addRecord(gradebookId: string, record: string) {
        const gradebooks = this.database.get("gradebooks");
        const currentGradebook = gradebooks.get(gradebookId);
        currentGradebook.records.push(record);
    }

    public async read(gradebookId: string, pupilId: string) {
        const groupsInstanse = this.database.get("groups");

        const groups = await groupsInstanse.readAll();

        let pupil;

        groups.forEach((group) => {
            const currentGroup = group;
            const pupils = currentGroup.pupils;

            pupil = this._findPupil(pupils, pupilId);
        });

        const gradebooks = this.database.get("gradebooks");
        const currentGradebook = gradebooks.get(gradebookId);
        const recordsDateBase = currentGradebook.records;

        const updatedRecords = [];

        for (const record of recordsDateBase) {
            const { teacherId, subjectId, lesson, mark } = record;
            const teachers = this.database.get("teachers");
            const lms = this.database.get("lms");
            const { name: { first, last } } = await teachers.read(teacherId);
            const { title } = await lms.read(subjectId);

            updatedRecords.push({
                lesson,
                mark,
                subject: title,
                teacher: `${first} ${last}`,
            });
        }

        return {
            name: `${pupil.name.first} ${pupil.name.last}`,
            records: updatedRecords,
        };
    }

    public async readAll(gradebookId: string) {
        const values = this.database.get("gradebooks").values();
        return [Array.from(values)];
    }

    private _findPupil(pupils, pupilId) {
        return pupils.find((pupil) => pupil.id === pupilId);
    }

    private _findTeacher(teachers, teacherId) {
        return teachers.find((teacher) => teacher.id === teacherId);
    }
}
