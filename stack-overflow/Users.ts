import { BaseClass, Id } from "./id";

export interface PasswordModel {
    password: string;
}

export interface UserModel extends Id {
    username: string,
    email: string,
    reputation: string,
    password: Password,
}

export class Password {
    private password: string;

    constructor(password: PasswordModel){
        this.password = password.password;
        this.hashPassword();
    }

    public get getPassword() {
        return this.password;
    }

    private hashPassword(){}
}

export class User extends BaseClass<UserModel> {

    public get getUsername() {
        return this.data.username;
    }

    public get getEmail(){
        return this.data.email;
    }

    public getReputation() {
        return this.data.reputation;
    }

    public set setReputation(reputation: string) {
        this.data.reputation = reputation;
    }

    public get getPassword() {
        return this.data.password;
    }

    public set setPassword(password: PasswordModel){
        this.data.password = new Password(password);
    }
}