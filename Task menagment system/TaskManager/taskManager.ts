import { Task, TaskModel } from "../Task/task";
import { TaskService } from "../Task/task.service";
import { User } from "../User/Users";
import { UserService } from "../User/user.service";
import { TaskStatus } from "../base/baseModel";

export class TaskManager {
    private static instance: TaskManager;

    private constructor(
        private readonly userService: UserService,
        private readonly taskService: TaskService,
    ) {}

    public static getInstance(userService: UserService, taskService: TaskService) {
        if (this.instance) this.instance;
        return new TaskManager(userService, taskService);
    }

    public createTask(taskModel: TaskModel): Task {
        const task = this.taskService.create(taskModel);
        if(!task) throw new Error("Error creation time to Task");
        return task;
    }

    public findAllUser() {
        return this.userService.findAll();
    }

    public findAllTasks() {
        return this.taskService.findAll();
    }

    public assignTaskToUser(taskId: number, user: User) {
        return this.taskService.update(taskId, {
            assigned_user: user,
        })
    }

    public unAssignTaskFromUser(taskId: number) {
        return this.taskService.update(taskId, {
            assigned_user: undefined,
        })
    }

    public getTaskHistory() {}

    public markTaskCompleted(taskId: number) {
        return this.taskService.update(taskId, {
            status: TaskStatus.COMPLETED,
        })
    }

    public filterTask(value: Partial<TaskModel>) {
        return this.taskService.filterTasks(value);
    }

    public searchTask(value: string) {
        return this.taskService.searchTask(value);
    }

    public deleteTask(taskId: number) {
        const res = this.taskService.delete({ id: taskId });
        if(!res) throw new Error("This task was not found");
        return res;
    }

    public updateTask(taskModule: TaskModel) {
        if(taskModule.id) this.taskService.update(taskModule.id, taskModule);
        throw new Error("Task id was not found");
    }
}