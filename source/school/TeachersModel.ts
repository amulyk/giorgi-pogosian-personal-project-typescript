export class TeachersModel {

    private database: Map<string, TeachersModelConfig>;

    constructor() {
        this.database = new Map<string, TeachersModelConfig>();
    }

    public async add(teacher: TeachersModelConfig) {
        const id = String(Math.floor(Math.random() * new Date().getTime()));
        teacher.id = id;
        this.database.set(id, teacher);
        return id;
    }

    public async read(teacherId: string) {
        if (!this.database.has(teacherId)) {
            throw new Error("Object not found");
        }
        return this.database.get(teacherId);
    }

    public async update(teacherId: string, updated: TeachersModelConfig) {
        const props = Object.getOwnPropertyNames(updated);
        
        for (const prop of props) {
            // return this.database.get(teacherId)[prop] = updated[prop];
        }
    }

    public async remove(teacherId: string) {
        if (!this.database.has(teacherId)) {
            throw new Error("Object not found");
        }
        return this.database.delete(teacherId);
    }
}
