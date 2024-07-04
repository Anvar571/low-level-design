import { User, UserModel } from "./Users";

export interface UserRepository {
    create(user: User): boolean;
    findByParam(param: Partial<UserModel>): User | undefined;
    findAll(): User[];
}

export class UserRepositoryImpl implements UserRepository {
    private users: User[] = [];

    create(user: User): boolean {
        const hasUser = this.findByParam({email: user.email});
        if(hasUser) return false;
        this.users.push(user);
        return true;
    }

    findByParam(param: Partial<UserModel>): User | undefined {
        return this.users.find((val) => {
            return Object.keys(param).every(key => {
                return val[key] === param[key];
            })
        })
    }

    findAll(): User[] {
        return this.users;
    }

}