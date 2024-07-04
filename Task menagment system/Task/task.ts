import { User } from "../User/Users";
import { BaseEntityClass } from "../base/baseClasss";
import { BaseModel, TaskStatus, TaskPriority } from "../base/baseModel";

export interface TaskModel extends BaseModel {
    title: string,
    description: string;
    due_date: Date;
    priority: TaskPriority,
    status?: TaskStatus,
    assigned_user: User,
}

export class Task extends BaseEntityClass<TaskModel> {
    constructor(task: TaskModel) {
        super(task);
        this.status = TaskStatus.INPROGRESS;
    }

    public get title() {
        return this.data.title;
    }

    public set title(title: string) {
        this.data.title = title;
    }

    public get description() {
        return this.data.description;
    }

    public set description(description: string) {
        this.data.description = description;
    }

    public get due_date() {
        return this.data.due_date;
    }

    public set due_date(due_date: Date) {
        this.data.due_date = due_date;
    }

    public get priority() {
        return this.data.priority;
    }

    public set priority(priority: TaskPriority) {
        this.data.priority = priority;
    }

    public get status() {
        return this.data.status as TaskStatus;
    }

    public set status(status: TaskStatus) {
        this.data.status = status;
    }

    public get assigned_user(): User | undefined {
        return this.data.assigned_user;
    }

    public set assigned_user(value: User) {
        this.data.assigned_user = value;
    }

}