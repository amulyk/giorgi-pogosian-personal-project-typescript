export class SubjectsModel {

    public readonly id: string;
    private title: string;
    private lessons: number;
    private description: string;

    constructor({ title, lessons, description = "" }: SubjectsModelConfig) {
        this.id = String(Math.floor(Math.random() * new Date().getTime()));
        this.title = title;
        this.lessons = lessons;
        this.description = description;
    }
}
