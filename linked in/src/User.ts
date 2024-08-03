import { Message } from "./Message";
import { Base } from "./base";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    profile?: unknown;
    connections?: User[];
    inbox?: Message[];
    sendMessages?: Message[]
}

export class UserImpl extends Base {
    constructor(private user: User) {
        super();
    }

    public get name() {
        return this.user.name;
    }

    public get email() {
        return this.user.email;
    }

    public get password() {
        return this.user.password;
    }
    
    public get profile() {
        return this.user.profile;
    }

    public get connections() {
        return this.user.connections;
    }

    public get inbox() {
        return this.user.inbox;
    }
}