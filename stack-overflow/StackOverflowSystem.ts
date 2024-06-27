import { Answer } from "./Answer";
import { Question } from "./Question";
import { Tag } from "./Tag";
import { User } from "./Users";

export class StackOverflowSystem{
    private users: User[] = [];
    private questions: Question[] = [];
    private answers: Answer[] = [];
    private tags: Tag[] = [];
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

    public login(username: string, password: string): User | boolean {
        const user = this.users.find((val, ind) => val.getUsername === username);
        if(user){
            if (user.getPassword.getPassword !== password) {
                throw new Error("This is user username or password incorrect")
            }
            return user
        }
        
        return false
    }

    public addQuestion(newQuestion: Question) {
        const question = this.questions.find((val) => val.getTitle === newQuestion.getTitle);

        if (question) {
            throw new Error("This question already exists")
        }

        this.questions.push(newQuestion);
    }

    public addAnswer(questionId: number, answer: Answer) {
        const question = this.questions.find((val) => val.getId === questionId);

        if (!question) {
            throw new Error("this question is not found")
        }

        this.questions.map(item => item.getId === questionId ? {answers: answer}: item)
    }
    
}