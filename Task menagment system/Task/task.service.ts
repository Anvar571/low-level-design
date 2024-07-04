import { Task, TaskModel } from "./task";
import { TaskRepository } from "./task.repository";

export interface TaskService {
    create(task: TaskModel): Task;
    findAll(): Task[];
    findByParam(param: Partial<TaskModel>): Task | undefined;
    update(id: number, task: Partial<TaskModel>): Task | boolean;
    delete(task: Partial<TaskModel>): boolean;
    searchTask(value: string): Task[] | [];
    filterTasks(value: Partial<TaskModel>): Task[] | [];
}

export class TaskServiceImpl implements TaskService {
    constructor(
        private readonly taskRepository: TaskRepository
    ) {}
    
    create(task: TaskModel): Task {
        const hasTask = this.taskRepository.findByParam({title: task.title});
        if (hasTask) throw new Error('This task already exsists');
        const newTask = this.taskRepository.create(task);
        return newTask;
    }

    findAll(): Task[] {
        return this.taskRepository.findAllTask();
    }
    
    findByParam(param: Partial<TaskModel>): Task | undefined {
        return this.taskRepository.findByParam(param);
    }
    
    update(id: number, task: TaskModel): Task | boolean {
        const updateTask = this.taskRepository.findByParam({id});
        if(!updateTask) return false;
        updateTask.title = task.title ?? updateTask.title;
        updateTask.description = task.description ?? updateTask.description;
        updateTask.due_date = task.due_date ?? updateTask.due_date;
        updateTask.priority = task.priority ?? updateTask.priority;
        updateTask.status = task.status ?? updateTask.status;
        updateTask.assigned_user = task.assigned_user;

        this.taskRepository.updateTask(updateTask);
        return true;
    }
    
    delete(task: TaskModel): boolean {
        const deleteTask = this.taskRepository.findByParam({id: task.id});
        if (!deleteTask) return false;
        this.taskRepository.deleteTask(task);
        return true;
    }

    searchTask(value: string) {
        return this.taskRepository.searchTask(value);
    }

    filterTasks(value: Partial<TaskModel>): Task[] | [] {
        return this.taskRepository.filterTasks(value);
    }
}