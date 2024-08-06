import { User } from "./User";
import { Base } from "./base";

export interface MessageDeteil {
    id?: string;
    sender: User;
    receiver: User;
    content: string;
    timestamp: Date;
}

export class Message extends Base {
    constructor(private message: MessageDeteil) {
        super();
    }

    public get sender() {
        return this.message.sender;
    }

    public get receiver() {
        return this.message.receiver;
    }

    public get content() {
        return this.message.content;
    }

    public get timestamp() {
        return this.message.timestamp;
    }
}