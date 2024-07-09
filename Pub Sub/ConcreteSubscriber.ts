import { Message } from "./Message";
import { Subscriber } from "./Subscriber";
import { Topic } from "./Topic";

export class ConcretSubscriber implements Subscriber {
    constructor(private name: string) {}

    public get getName() {
        return this.name;
    }

    onMethod<T>(topic: Topic, message: Message): any {
        console.log(`Subbscriber ${this.name} received topic name: ${topic.name} topic message: ${message.title}`);
    }
}