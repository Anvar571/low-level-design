import { Message } from "./Message";
import { Topic } from "./Topic";

export class Publisher {
    private topics: Map<string, Topic>;

    constructor() {
        this.topics = new Map();
    }

    public registerTopic(newTopic: Topic): Topic {
        const topic = this.topics.has(newTopic.name);

        if (topic) throw new Error("This is a topic already exists");

        this.topics.set(newTopic.name, newTopic);
        return newTopic;
    }

    public publish(topic: Topic, message: Message) {
        if (!this.topics.has(topic.name)) {
            console.log(`This publisher can't publish to topic: ${topic.name}`);
            return;
          }
          topic.publish(topic, message);
    }

    public allTopics() {
        return this.topics;
    }
}