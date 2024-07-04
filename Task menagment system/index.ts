import { TaskRepositoryImpl } from "./Task/task.repository";
import { TaskServiceImpl } from "./Task/task.service";
import { TaskManager } from "./TaskManager/taskManager";
import { User } from "./User/Users";
import { UserRepositoryImpl } from "./User/user.repository";
import { UserServiceImpl } from "./User/user.service";
import { TaskPriority, TaskStatus } from "./base/baseModel";

export class Demo {
    public static run() {
        // IoC OR DI
        const UserRepository = new UserRepositoryImpl();
        const TaskRepository = new TaskRepositoryImpl();
        const UserService = new UserServiceImpl(UserRepository);
        const TaskService = new TaskServiceImpl(TaskRepository);

        const taskManager = TaskManager.getInstance(UserService, TaskService);

        const user1 = UserService.createUser({
            name: "lorem",
            email: "lorem@52gmail.com"
        });
        const user2 = UserService.createUser({
            name: "ipsum",
            email: "ipsum@54gmail.com"
        })

        const task1 = taskManager.createTask({
            title: "Implement payment API for this repo",
            description: "Full should be method",
            due_date: new Date(),
            priority: TaskPriority.LOW,
            assigned_user: user1,
        });

        const task2 = taskManager.createTask({
            title: "Integration payme with telegram bor",
            description: "Full should be method",
            due_date: new Date(),
            priority: TaskPriority.HIGH,
            assigned_user: user2,
        });

        // taskManager.assignTaskToUser(task1.id, user2);
        // taskManager.unAssignTaskFromUser(task1.id);

        console.log(taskManager, "taskManager");
        
        const tasks = taskManager.findAllTasks();
        const users = taskManager.findAllUser();

        taskManager.markTaskCompleted(task1.id);

        
        const resSearch = taskManager.searchTask("payme");
        const filterRes = taskManager.filterTask({status: TaskStatus.INPROGRESS});
        
        // console.log(resSearch, 'resSearch');
        // console.log(filterRes, "filter res");
        // console.log(tasks);

    }
}

Demo.run();
