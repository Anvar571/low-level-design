import { Answer } from "./Answer";
import { Question } from "./Question";
import { StackOverflowSystem } from "./StackOverflowSystem";
import { Tag } from "./Tag";
import { Password, User } from "./Users";
import { VoteCount } from "./Vote-count";
import { Comment } from "./Comment";

export class Main{
    public static run() {
        // actually every class should be a service
        // That's it for the test here
        try {
            const stackOverflow = StackOverflowSystem.getInstanse();

            const user1 = new User({
                email: "anvar@gmail.com",
                username: "anvar",
                reputation: "1",
                password: new Password({
                    password: "12345678"
                })
            });
            
            stackOverflow.register(user1);
            const user = stackOverflow.login(user1.getUsername, user1.getPassword.getPassword);
            if (!user){
                console.log("User not found, Please Register now");
            } else {
                console.log(`Loggin successfull ${user.getUsername} user`);
            }

            const question1 = new Question({
                author: user1,
                body: "Can you explain this question please",
                tags: new Tag({name: "programming"}),
                title: "What is Typescript",
                vote_count: new VoteCount(0),
            });
            const question2 = new Question({
                author: user1,
                body: "Can you explain this question please",
                tags: new Tag({name: "programming"}),
                title: "What is Golang",
                vote_count: new VoteCount(0),
            })
            
            const answer1 = new Answer({
                author: user1,
                body: "this is perfect question",
                question: question1,
            });

            stackOverflow.addQuestion(question1);
            stackOverflow.addQuestion(question2);
            stackOverflow.addAnswer(question1.getId, answer1);

            const comment1 = new Comment({
                author: user1,
                text: "lorem ipsum",
                to: answer1,
            });
            stackOverflow.addComment(comment1);

            const searchResult = stackOverflow.searchQuestion("you");
            const searchByTag = stackOverflow.getQuestionByTag("programming");

            console.log("search Result", searchResult);

            console.log("search by tag", searchByTag);

            
        } catch (error) {
            console.log(error);
        }
    }
}

Main.run();
