import { Maybe } from "./Maybe";

export function findMessage<T>(target: T[], key: keyof T, value: any): Maybe<T> {
    const result = target.find(item => item[key] === value);
    return result ? Maybe.just(result) : Maybe.nothing();
}