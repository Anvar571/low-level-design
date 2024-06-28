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
    tags: Tag,
    vote_count: VoteCount,
}

export class Question extends BaseClass<QuestionModel> {

    public get getTitle() {
        return this.data.title;
    }

    public get getAuthor() {
        return this.data.author;
    }

    public get getBody() {
        return this.data.body;
    }

    public get answers(){
        return this.data.answers;
    }

    public get comments() {
        return this.data.comments;
    }

    public get getTag() {
        return this.data.tags;
    }

    public get voteCount(): VoteCount | undefined {
        return this.data.vote_count;
    }

    public set voteCount(value: VoteCount) {
        this.data.vote_count = value;
    }
}
