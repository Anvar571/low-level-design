
export class BaseEntityClass<T> {
    private static idCounter = 0;
    protected data: T & {id: number};

    constructor(data?: T) {
        Object.defineProperty(this, 'data', {value: data});
        this.data.id = ++BaseEntityClass.idCounter;
    }

    public get id() {
        return this.data.id;
    }
}