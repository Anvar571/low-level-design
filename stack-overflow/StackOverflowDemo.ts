import { StackOverflowSystem } from "./StackOverflowSystem";
import { User } from "./Users";

export class Main{
    public static run() {
        const stackOverflow = StackOverflowSystem.getInstanse();

        const user1 = new User({
            email: "anvar@gmail.com",
            username: "anvar",
            reputation: "1",
            password: {
                password: "12345678"
            }
        });

        stackOverflow.register(user1);
        const user = stackOverflow.login(user1.getUsername, user1.getPassword.getPassword);
        if (!user){
            console.log("User not found, Please Register now");
        } else {
            console.log("Loggin successfully");
        }
    }
}

Main.run();