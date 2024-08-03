import { randomUUID } from 'crypto';

export class Base {
    constructor() {}

    public get id() {
        return randomUUID();
    }
}