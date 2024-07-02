
export class BaseClass<T> {
    protected data: T;

    constructor(data?: T) {
        Object.defineProperty(this, "data", {value: data});
    }
}