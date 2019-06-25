// import {validate} from "./validate";

export class TeachersModel {

    private database: Map<string, TeachersModelConfig>;

    constructor() {
        this.database = new Map<string, TeachersModelConfig>();
    }

    async add(teacher: TeachersModelConfig) {
        let id = String(Math.floor(Math.random() * new Date().getTime()));
        teacher.id = id;
        // validate(this.schema, teacher);
        this.database.set(id, teacher);
        return id;
    }

    async read(teacherId: string) {
        if (!this.database.has(teacherId)) {
            throw new Error("Object not found");
        }
        return this.database.get(teacherId);
    }

    async update(teacherId: string, updated: object) {
        // validate(this.schema, updated, true);
        let props = Object.getOwnPropertyNames(updated);
        for (let prop of props) {
            console.log(this.database.get(teacherId));
            return "update test";
            // return this.database.get(teacherId)[prop] = updated[prop];
        }
    }

    async remove(teacherId: string) {
        if (!this.database.has(teacherId)) {
            throw new Error("Object not found");
        }
        return this.database.delete(teacherId);
    }
}
