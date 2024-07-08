import { Message } from "./Message";

export interface Subscriber {
    onMethod<T>(arg: Message): T;
}
