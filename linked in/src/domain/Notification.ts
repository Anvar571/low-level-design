import { NotificationType } from "./NotificationType";
import { User } from "./User";
import { Base } from "./base";

export interface NotificationDetails {
    id?: string;
    user: User,
    type: NotificationType,
    content: string;
    timestamp: Date;
}

export class Notification extends Base {
    constructor(private notification: NotificationDetails) {
        super();
    }

    public get user() {
        return this.notification.user;
    }

    public get type() {
        return this.notification.type;
    }

    public get content() {
        return this.notification.content;
    }

    public get timestamp() {
        return this.notification.timestamp;
    }
}