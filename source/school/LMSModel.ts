import { SubjectsModel } from "./SubjectsModel";

export class LMSModel {

    private database: Map<string, SubjectsModel>;

    constructor() {
        this.database = new Map<string, SubjectsModel>();
    }

    async add(subject: SubjectsModel) {
        let { id } = subject;
        this.database.set(id, subject);
        return id;
    }

    async remove(subject: SubjectsModel) {
        let { id } = subject;
        if (!this.database.has(id)) {
            throw new Error("Object not found");
        }
        return this.database.delete(id);
    }

    async verify(subject: SubjectsModel) {
        let { id } = subject;
        return this.database.has(id) ? true : false;
    }

    async read(id: string) {
        if (!this.database.has(id)) {
            throw new Error("Object not found");
        }
        return this.database.get(id);
    }

    async readAll() {
        return [...this.database.values()];
    }
}
