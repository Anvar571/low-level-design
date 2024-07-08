import { Message } from "./Message";
import { Subscriber } from "./Subscriber"

export interface TopicModel {
    name: string;
}

export class Topic {
    private subscribers: Subscriber[] = [];

    constructor(private topic: TopicModel) {}

    public get getTopic() {
        return this.topic.name;
    }

    public addSubscriber(newSubscriber: Subscriber) {
        this.subscribers.push(newSubscriber);
    }

    public removeSubscriber(subscriber: Subscriber) {
        const findIndex = this.subscribers.findIndex((val) => val.onMethod === subscriber.onMethod);
        if (findIndex === -1) throw new Error("not found");
        this.subscribers.splice(findIndex, 1);
    }

    public publish(message: Message) {
        for (let subscriber of this.subscribers) {
            subscriber.onMethod(message);
        }
    }
    
}