import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class TasksService {
  constructor(
    @Inject('SERVICE_TASKS') private readonly clientTasksApp: ClientProxy,
    @Inject('SERVICE_PAYMENT') private readonly clientPaymentApp: ClientProxy,
  ) {}

  //POST parameter from API
  createTask(
    postName: string = 'test',
    postDescription: string = 'admin',
    postUserId: string = '1',
    postStartTime: number = 1710851709478,
    postDuration: number = 1710851709478,
    postIsSolved: boolean = false,
    postNotificationId: number = 1,
    postCreatedAt: number = 1710851772972,
  ) {
    const pattern = { cmd: 'task_create' };
    const payload = {
      name: postName,
      description: postDescription,
      user_id: postUserId,
      start_time: postStartTime,
      duration: postDuration,
      is_solved: postIsSolved,
      notification_id: postNotificationId,
      created_at: postCreatedAt,
    };
    return this.clientTasksApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET parameter from API
  findTask(paramTaskId: number) {
    const pattern = { cmd: 'task_find' };
    const payload = { id: paramTaskId };
    return this.clientTasksApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET without parameter from API
  allTask() {
    const pattern = { cmd: 'task_all' };
    const payload = {};
    return this.clientTasksApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET parameter from API
  cancelTask(taskId: number) {
    const pattern = { cmd: 'task_cancel' };
    const payload = taskId;
    return this.clientTasksApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //POST parameter from API
  payTask(taskId: number) {
    const pattern = { cmd: 'task_pay' };
    const payload = taskId;
    return this.clientTasksApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
