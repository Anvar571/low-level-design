import { User, UserModel } from "./Users";
import { UserRepository } from "./user.repository";

export interface UserService {
    createUser(user: UserModel): User | boolean;
    findAll(): User[]|[];
    findByParam(param: Partial<UserModel>): User | boolean;
}

export class UserServiceImpl implements UserService {
    constructor(private readonly userRepository: UserRepository) {}

    createUser(user: UserModel): User {
        const findUser = this.userRepository.findByParam({email: user.email});
        if(findUser) throw new Error("This user already exists");
        const newUser = new User(user);
        this.userRepository.create(newUser);
        return newUser;
    }
    findAll(): [] | User[] {
        return this.userRepository.findAll();
    }
    findByParam(param: Partial<UserModel>): User | boolean {
        const findUser = this.userRepository.findByParam(param);
        if(!findUser) return false;
        return findUser;
    }

}