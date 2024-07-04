import { User } from "../User/Users";
import { Task, TaskModel } from "./task";

export interface TaskRepository {
    create(task: TaskModel): Task;
    assignUser(user: User, task: Task): boolean;
    updateTask(task: Task): Task | undefined;
    findByParam(param: Partial<TaskModel>): Task | undefined;
    deleteTask(task: TaskModel): boolean;
    findAllTask(): Task[] | [];
    searchTask(value: string): Task[] | [];
    filterTasks(value: Partial<TaskModel>): Task[] | [];
}

export class TaskRepositoryImpl implements TaskRepository {
    private tasks: Task[] = [];

    public updateTask(task: Task): Task {
        const updatedTask = this.tasks.findIndex((val) => val.id === task.id);
        console.log(updatedTask, 'updated task');
        
        if (updatedTask !== -1) {
            this.tasks[updatedTask] = task;
        }
        return task;
    }

    public findByParam(param: Partial<TaskModel>): Task | undefined {
        return this.tasks.find((val) => {
            return Object.keys(param).every((key) => {
                return val[key] === param[key];
            })
        })
    }

    public assignUser(user: User, task: Task): boolean {
        task.assigned_user = user;
        return true;
    }

    public findAllTask(): Task[] | [] {
        return this.tasks;
    }

    public create(task: TaskModel): Task {
        const newTask = new Task(task);
        this.tasks.push(newTask);
        return newTask;
    }

    public deleteTask(task: TaskModel): boolean {
        const hasTask = this.tasks.findIndex((val) => val.id === task.id);
        if(hasTask !== -1) return false;
        this.tasks.splice(hasTask, 1);
        return true;
    }

    public searchTask(value: string): Task[] | [] {
        return this.tasks.filter((val) => val.title.includes(value));
    }

    public filterTasks(value: Partial<TaskModel>): Task[] | [] {
        return this.tasks.filter((val) => {
            return Object.keys(value).some(key => {
                return val[key] === value[key];
            })
        })
    }
}
