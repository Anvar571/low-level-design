import { Answer } from "./Answer";
import { Question } from "./Question";
import { User } from "./Users";
import { Comment } from "./Comment";

export class StackOverflowSystem{
    private users: User[] = [];
    private questions: Question[] = [];
    private answers: Answer[] = [];
    private comments: Comment[] = [];
    private static instanse: StackOverflowSystem | null;

    private constructor() {}

    public static getInstanse() {
        if(this.instanse){
            return this.instanse
        }
        return new StackOverflowSystem();
    }

    public register(newUser: User) {
        const user = this.users.find((val, ind) => val.getUsername === newUser.getUsername);

        if(user){
            throw new Error("This user already registered")
        }

        this.users.push(newUser);
    }

    public login(username: string, password: string): User {
        const user = this.users.find((val, ind) => val.getUsername === username);
        if(user){
            if (user.getPassword.getPassword !== password) {
                throw new Error("This is user username or password incorrect")
            }
            return user
        } else {
            throw new Error("User not found")
        }
    }

    public addQuestion(newQuestion: Question) {
        const question = this.questions.find((val) => val.getTitle === newQuestion.getTitle);

        if (question) {
            throw new Error("This question already exists")
        }
        // implement other check user has

        this.questions.push(newQuestion);
    }

    public addAnswer(questionId: number, answer: Answer) {
        const question = this.questions.find((val) => val.getId === questionId);

        if (!question) {
            throw new Error("this question is not found")
        }

        this.answers.push(answer);
    }

    public addComment(comment: Comment) {
        const from = comment.getTo;
        if (from instanceof Question) {
            const question = this.questions.find((val) => val.getId === from.getId);
            if(!question) throw new Error("Question not found")
        } else {
            const answer = this.answers.find((val) => val.getId === from.getId);
            if(!answer) throw new Error("Answer not found")
        }

        this.comments.push(comment);
    }

    public searchQuestion(value: string) {
        return this.questions.filter((val) => val.getTitle.includes(value));
    }

    public getQuestionByTag(value: string) {
        return this.questions.filter((val) => val.getTag.getName === value);
    }
}