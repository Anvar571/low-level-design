import { User } from "./User";

export interface MessageDeteil {
    id?: string;
    sender: User;
    receiver: User;
    content: string;
    timestamp: Date;
}

export class Message {
    constructor(private message: MessageDeteil) {}

    
}