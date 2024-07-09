import { Message } from "./Message";
import { Subscriber } from "./Subscriber"

export interface TopicModel {
    name: string;
}

export class Topic {
    private subscribers: Set<Subscriber>;

    constructor(private topic: TopicModel) {
        this.subscribers = new Set();
    }

    public get name() {
        return this.topic.name;
    }

    public allSubscribers() {
        return this.subscribers;
    }

    public addSubscriber(newSubscriber: Subscriber) {
        this.subscribers.add(newSubscriber);
    }

    public removeSubscriber(subscriber: Subscriber) {
        const removeSubscriber = this.subscribers.has(subscriber);

        if (!removeSubscriber) throw new Error("not found");

        this.subscribers.delete(subscriber);
    }

    public publish(topic: Topic, message: Message) {
        for (let subscriber of this.subscribers) {
            subscriber.onMethod(topic, message);
        }
    }
}