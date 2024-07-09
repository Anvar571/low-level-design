import { Message } from "./Message";
import { Topic } from "./Topic";

export class Publisher {
    private topics: Set<Topic>;

    constructor() {
        this.topics = new Set();
    }

    public registerTopic(newTopic: Topic): Topic {
        const topic = this.topics.has(newTopic);

        if (topic) throw new Error("This is a topic already exists");

        this.topics.add(newTopic);
        return newTopic;
    }

    public publish(topic: Topic, message: Message) {
        if (!this.topics.has(topic)) {
            console.log(`This publisher can't publish to topic: ${topic.name}`);
            return;
          }
          topic.publish(topic, message);
    }

    public allTopics() {
        return this.topics;
    }
}