import { User } from "./Users";
import { BaseClass, Id } from "./id";

export interface CommentModule extends Id {
    text: string,
    author: User,
    timestamp: Date,
}

export class Comment extends BaseClass {
    constructor(private comment: CommentModule) {
        super()
        this.comment.id = this.generateId();
    }

    public get getText() {
        return this.comment.text;
    }

    public get getAuthor(){
        return this.comment.author;
    }

    public get getId() {
        return this.comment.id;
    }
}