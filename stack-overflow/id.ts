
export interface Id {
    id?: number,
}

export class BaseClass {
    public idCount = 0;

    public generateId() {
        return this.idCount++;
    }
}