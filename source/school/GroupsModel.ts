export class GroupsModel {

    private database: Map<string, object>;

    constructor() {
        this.database = new Map<string, object>();
    }

    public async add(room: number) {
        const id = this._makeid();
        const group = Object.create(Object.prototype, {
            id: {
                enumerable: true,
                value: id,
            },
            pupils: {
                enumerable: true,
                value: [],
                writable: true,
            },
            room: {
                enumerable: true,
                value: room,
                writable: true,
            },
        });
        this.database.set(id, group);
        return group.id;
    }

    public async removePupil(groupId: string, id: string) {
        if (!this.database.has(groupId)) {
            throw new Error("Group not found");
        } else {
            const pupilsArray = this.database.get(groupId).pupils;
            for (const pupil of pupilsArray) {
                if (pupil.id === id) {
                    return pupilsArray.splice(pupilsArray.indexOf(pupil), 1);
                }
            }
        }
    }

    public async addPupil(groupId: string, pupil: object) {
        if (!this.database.has(groupId)) {
            throw new Error("Group not found");
        }
        // return this.database.get(groupId).pupils.push(pupil);
    }

    public async update(groupId: string, updated: object) {
        const props = Object.getOwnPropertyNames(updated);
        for (const prop of props) {
            // return this.database.get(groupId)[prop] = updated[prop];
        }
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

    private _makeid(length = 8) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}
