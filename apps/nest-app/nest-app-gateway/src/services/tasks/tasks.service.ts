import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class TasksService {
    constructor(
        @Inject('SERVICE_TASKS') private readonly tasksOrderApp: ClientProxy,
    ) { }

    //GET without parameter from API
    getTasks() {
        const pattern = { cmd: 'task_search_by_user_id' };
        const payload = {}
        return this.tasksOrderApp
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message })),
            );
    }

    //POST parameter from API
    createTask(taskName: string = "task1", taskDescription: string = "89852224466") {
        const pattern = { cmd: 'task_create' };
        const payload = { taskDescription: taskDescription };
        return this.tasksOrderApp
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message })),
            );
    }

    //DELETE parameter from API
    deleteTask(orderId: number) {
        const pattern = { cmd: 'task_delete_by_id' };
        const payload = {}
        return this.tasksOrderApp
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message })),
            );
    }

    //PUT parameter from API
    updateTask(paramOrderId: number) {
        const pattern = { cmd: 'task_update_by_id' };
        const payload = {}
        return this.tasksOrderApp
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message })),
            );
    }

}
