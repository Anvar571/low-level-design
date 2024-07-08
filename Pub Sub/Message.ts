export interface MessageModel {
    title: string;
    description: string;
    createdAt?: Date;
}

export class Message {
    constructor(private message: MessageModel) {
        this.message.createdAt = new Date();
    }

    public get title() {
        return this.message.title;
    }

    public get description() {
        return this.message.description;
    }
}
