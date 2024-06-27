import { Answer } from "./Answer";
import {User} from "./Users";
import { BaseClass, Id } from "./id";
import { Tag } from "./Tag";
import { VoteCount } from "./Vote-count";

export interface QuestionModel extends Id {
    title: string,
    body: any,
    author: User,
    answers?: Answer[],
    comments?: Comment[],
    tags?: Tag[],
    vote_count?: VoteCount,
}

export class Question extends BaseClass {
    constructor(private question: QuestionModel) {
        super()
        this.question.id = this.generateId();
    }

    public get getTitle() {
        return this.question.title;
    }

    public get getAuthor() {
        return this.question.author;
    }

    public get getBody() {
        return this.question.body;
    }

    public get getId() {
        return this.question.id;
    }

    public get answers(){
        return this.question.answers;
    }

    public get comments() {
        return this.question.comments;
    }

    public get tags() {
        return this.question.tags;
    }

    public get voteCount(): VoteCount | undefined {
        return this.question.vote_count;
    }

    public set voteCount(value: VoteCount) {
        this.question.vote_count = value;
    }
}
