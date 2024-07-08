import { ConcretSubscriber } from "./ConcreteSubscriber";
import { Publisher } from "./Publisher";
import { Topic } from "./Topic";

export class PubSubSystem {
    constructor(
        private readonly publisher: Publisher,
        private readonly topic: Topic,
        
    ) {}

    static run() {
        const topic1 = new Topic({name: "topic 1"});
        const topic2 = new Topic({name: "topic 2"});
        const topic3 = new Topic({name: "topic 3"});

        const publisher = new Publisher();
        const publisher2 = new Publisher();

        const subscriber1 = new ConcretSubscriber("subscriber 1");
        const subscriber2 = new ConcretSubscriber("subscriber 2");

        const message = publisher.publishMessage({title: "lorem", description: "lorem ipsum"});
        const message2 = publisher.publishMessage({title: "lorem", description: "lorem ipsum2 "});


        subscriber1.onMethod(message);
        subscriber1.onMethod(message2);

    }
}


PubSubSystem.run();