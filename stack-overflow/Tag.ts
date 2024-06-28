import { BaseClass, Id } from "./id";

export interface TagModule extends Id {
    name: string
}

export class Tag extends BaseClass<TagModule> {
    public get getName(){
        return this.data.name;
    }
}