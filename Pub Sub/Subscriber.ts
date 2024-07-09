import { Message } from "./Message";
import { Topic } from "./Topic";

export interface Subscriber {
    onMethod<T>(topic: Topic, arg: Message): T;
}
