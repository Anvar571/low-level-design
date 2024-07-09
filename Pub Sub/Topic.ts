import { ConcretSubscriber } from "./ConcreteSubscriber";
import { Message } from "./Message";
import { Subscriber } from "./Subscriber"

export interface TopicModel {
    name: string;
}

export class Topic {
    private subscribers: Map<string, Subscriber>;

    constructor(private topic: TopicModel) {
        this.subscribers = new Map();
    }

    public get name() {
        return this.topic.name;
    }

    public allSubscribers() {
        return this.subscribers;
    }

    public addSubscriber(newSubscriber: Subscriber) {
        if (newSubscriber instanceof ConcretSubscriber) {
            this.subscribers.set(newSubscriber.getName, newSubscriber);
        }
        return false;
    }

    public removeSubscriber(subscriber: Subscriber) {
        if (subscriber instanceof ConcretSubscriber) {
            const removeSubscriber = this.subscribers.has(subscriber.getName);
            
            if (!removeSubscriber) throw new Error("not found");

            this.subscribers.delete(subscriber.getName);
        }
    }

    public publish(topic: Topic, message: Message) {
        for (let [_, subscriber] of this.subscribers) {
            subscriber.onMethod(topic, message);
        }
    }
}