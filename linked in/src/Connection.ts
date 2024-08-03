import { User } from "./User";

export class Connection { 
    constructor(private user: User, private date?: Date) {
        if (!this.date) {
            this.date = new Date();
        }
    }

    public get get_user() {
        return this.user;
    }

    public get get_date() {
        return this.date;
    }
}