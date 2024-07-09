import { ConcretSubscriber } from "./ConcreteSubscriber";
import { Message } from "./Message";
import { Publisher } from "./Publisher";
import { Topic } from "./Topic";

export class PubSubSystem {
    static run() {
        const topic1 = new Topic({name: "Course"});
        const topic2 = new Topic({name: "Treding"});
        const topic3 = new Topic({name: "IT"});

        const publisher = new Publisher();

        const subscriber1 = new ConcretSubscriber("subscriber 1");
        const subscriber2 = new ConcretSubscriber("subscriber 2");

        publisher.registerTopic(topic1);
        publisher.registerTopic(topic2);

        topic1.addSubscriber(subscriber1);
        topic1.addSubscriber(subscriber2);

        publisher.publish(topic1, new Message({title: "Message 1", description: "This is a message the best"}));
        publisher.publish(topic1, new Message({title: "Message 2", description: "This is a message the best"}));

        // topic1.removeSubscriber(subscriber2);

        publisher.publish(topic1, new Message({title: "Message 3", description: "This is a message the best"}));
        publisher.publish(topic2, new Message({title: "Message 4", description: "This is a message the best"}));
    }
}

PubSubSystem.run();