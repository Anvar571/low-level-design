import { BaseClass, Id } from "./id";

export interface PasswordModel {
    password: string;
}

export interface UserModel extends Id {
    username: string,
    email: string,
    reputation: string,
    password: PasswordModel,
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

export class User extends BaseClass {
    private id: number;
    private username: string;
    private email: string;
    private reputation: string;
    private password: Password;

    constructor(userModel: UserModel) {
        super();
        this.id = this.generateId();
        this.username = userModel.username;
        this.email = userModel.email;
        this.reputation = userModel.reputation;
        this.password = new Password(userModel.password);
    }

    public get getUsername() {
        return this.username;
    }

    public get getId() {
        return this.id;
    }

    public get getEmail(){
        return this.email;
    }

    public getReputation() {
        return this.reputation;
    }

    public set setReputation(reputation: string) {
        this.reputation = reputation;
    }

    public get getPassword() {
        return this.password;
    }

    public set setPassword(password: PasswordModel){
        this.password = new Password(password);
    }
}