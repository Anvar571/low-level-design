import { Answer } from "./Answer";
import { Question } from "./Question";
import { User } from "./Users";
import { BaseClass, Id } from "./id";

export interface CommentModule extends Id {
    text: string,
    author: User,
    to: Question | Answer,
    timestamp?: Date,
}

export class Comment extends BaseClass<CommentModule> {
    constructor(data: CommentModule){
        super(data)
        this.data.timestamp = new Date();

    }
    public get getText() {
        return this.data.text;
    }

    public get getAuthor(){
        return this.data.author;
    }

    public get getTo() {
        return this.data.to;
    }

    public get getId() {
        return this.data.id;
    }
}