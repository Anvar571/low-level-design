import { BaseEntityClass } from "../base/baseClasss";
import { BaseModel } from "../base/baseModel";

export interface UserModel extends BaseModel {
    name: string;
    email: string;
}

export class User extends BaseEntityClass<UserModel> {
    public get name() {
        return this.data.name;
    }

    public set name(name: string) {
        this.data.name = name;
    }

    public get email() {
        return this.data.email;
    }

    public set email(email: string) {
        this.data.email = email;
    }
}
