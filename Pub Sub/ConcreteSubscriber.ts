import { Message } from "./Message";
import { Subscriber } from "./Subscriber";

export class ConcretSubscriber implements Subscriber {
    constructor(private name: string) {}

    public get getName() {
        return this.name;
    }

    onMethod<T>(message: Message): any {
        console.log(`Subbscriber ${this.name} received message: ${message.title}`);
    }
}