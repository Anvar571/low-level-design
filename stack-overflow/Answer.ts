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

export class Answer extends BaseClass<AnswerModel>  {

    public get getAuthor(){
        return this.data.author;
    }

    public get getBody() {
        return this.data.body;
    }

    public get getQuestion() {
        return this.data.question;
    }

    public get getComments(){
        return this.data.comments;
    }

    public setVoteCount(vote_count: VoteCount) {
        this.data.vote_count = vote_count;
    }

    public get getVoteCount(){
        return this.data.vote_count;
    }
}