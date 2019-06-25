export class SubjectsModel {

    private title: string;
    private lessons: number;
    private description: string;
    readonly id: string;

    constructor({ title, lessons, description = null }: SubjectsModelConfig) {
        this.title = title;
        this.lessons = lessons;
        this.description = description;
        this.id = String(Math.floor(Math.random() * new Date().getTime()));
    }
}
