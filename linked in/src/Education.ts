
export class Education {
    private title: string;
    constructor(title: string) {
        this.title = title;
    }

    public get get_title() {
        return this.title;
    }
}