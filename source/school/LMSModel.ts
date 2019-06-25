import { SubjectsModel } from "./SubjectsModel";

export class LMSModel {

    private database: Map<string, SubjectsModel>;

    constructor() {
        this.database = new Map<string, SubjectsModel>();
    }

    public async add(subject: SubjectsModel) {
        const { id } = subject;
        this.database.set(id, subject);
        return id;
    }

    public async remove(subject: SubjectsModel) {
        const { id } = subject;
        if (!this.database.has(id)) {
            throw new Error("Object not found");
        }
        return this.database.delete(id);
    }

    public async verify(subject: SubjectsModel) {
        const { id } = subject;
        return this.database.has(id) ? true : false;
    }

    public async read(id: string) {
        if (!this.database.has(id)) {
            throw new Error("Object not found");
        }
        return this.database.get(id);
    }

    public async readAll() {
        const values = this.database.values();
        return [Array.from(values)];
    }
}
