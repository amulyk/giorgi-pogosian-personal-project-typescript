import { SubjectsModel } from "./index";

export class LMSModel {

    private database:Map<string,object>;

    constructor() {
        this.database = new Map<string,object>();
    }

    async add(subject:SubjectsModel) {
        let {id} = subject;
        this.database.set(id, subject);
        return id;
    }

    async remove(subject:SubjectsModel) {
        let {id} = subject;
        if(this.database.has(id)) {
            return this.database.delete(id);
        } else {
            throw new Error("Object not found");
        }
    }

    async verify(subject:SubjectsModel) {
        let {id} = subject;
        if(this.database.has(id)) {
            return true;
        } else {
            throw new Error(String(false));
        }
    }

    async read(id:string) {
        return this.database.get(id);
    }

    async readAll() {
        if(arguments.length > 0) {
            throw new Error("readAll() does not receive any parameters");
        } else {
            return [...this.database.values()];
        }
    }
}
