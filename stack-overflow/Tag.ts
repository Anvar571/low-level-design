import { BaseClass, Id } from "./id";

export interface TagModule extends Id {
    name: string
}

export class Tag extends BaseClass {
    constructor(private tag: TagModule){
        super();
        this.tag.id = this.generateId();
    }

    public get getName(){
        return this.tag.name;
    }

    public get getId(){
        return this.tag.id;
    }
}