import { Message, MessageModel } from "./Message";
import { findMessage } from "./util";

export class Publisher {
    private messages: Message[] = [];

    public publishMessage(newMessage: MessageModel): Message {
        const maybeMessage = findMessage(this.messages, "title", newMessage.title);
        maybeMessage.map(message => {
            throw new Error(`This message already exists ${message}`);
        });
        const message = new Message(newMessage);
        maybeMessage.byDefault(() => {
            this.messages.push(message);
        });
        return message;
    }

    public allMessages() {
        return this.messages;
    }
}