export class PupilsModel {

    private database: Map<string, PupilsModelConfig>;

    constructor() {
        this.database = new Map<string, PupilsModelConfig>();
    }

    public async add(pupil: PupilsModelConfig) {
        const id = String(Math.floor(Math.random() * new Date().getTime()));
        pupil.id = id;
        this.database.set(id, pupil);
        return this.database.get(id);
    }

    public async read(id: string) {
        if (!this.database.has(id)) {
            throw new Error("Object not found");
        }
        return this.database.get(id);
    }

    public async update(id: string, updated: PupilsModelConfig) {
        const props = Object.getOwnPropertyNames(updated);
        for (const prop of props) {
            // return this.database.get(id)[prop] = updated[prop];
        }
    }

    public async remove(pupilId: string) {
        if (!this.database.has(pupilId)) {
            throw new Error("Object not found");
        }
        return this.database.delete(pupilId);
    }
}
