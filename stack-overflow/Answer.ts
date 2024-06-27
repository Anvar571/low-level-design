import { Question } from "./Question";
import { User } from "./Users";
import { VoteCount } from "./Vote-count";
import { BaseClass, Id } from "./id";

export interface AnswerModel extends Id{
    body: any,
    author: User,
    question: Question,
    comments?: Comment[],
    vote_count?: VoteCount,
}

export class Answer extends BaseClass  {
    constructor(private answer: AnswerModel) {
        super();
        this.answer.id = this.generateId();
    }

    public get getId() {
        return this.answer.id;
    }

    public get getAuthor(){
        return this.answer.author;
    }

    public get getBody() {
        return this.answer.body;
    }

    public get getQuestion() {
        return this.answer.question;
    }

    public get getComments(){
        return this.answer.comments;
    }

    public setVoteCount(vote_count: VoteCount) {
        this.answer.vote_count = vote_count;
    }

    public get getVoteCount(){
        return this.answer.vote_count;
    }
}