
export interface Id {
    id?: number,
}

export class BaseClass<T> {
    private static currentId = 0;
    protected data: T & { id: number };

    constructor(data?: T) {
        Object.defineProperty(this, 'data', { value: data });
        this.data.id = ++BaseClass.currentId;
    }

    public get getId() {
        return this.data.id;
    }
}