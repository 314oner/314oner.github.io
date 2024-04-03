import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { TaskService } from './task.service';
import { ITask } from './interfaces/task.interface';

@Controller('order')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @MessagePattern({ cmd: 'task_create' })
  create(data: ITask) {
    return this.taskService.createTask(data);
  }

  @MessagePattern({ cmd: 'task_search_by_user_id' })
  public async taskSearchByUserId(userId: number): Promise<unknown> {
    let result: unknown;

    if (userId) {
      const tasks = await this.taskService.getTasksByUserId(userId);
      result = {
        status: HttpStatus.OK,
        message: 'task_search_by_user_id_success',
        tasks,
      };
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'task_search_by_user_id_bad_request',
        tasks: null,
      };
    }

    return result;
  }

  @MessagePattern({ cmd: 'task_find' })
  find(paramId: string) {
    return this.taskService.find(paramId);
  }

  @MessagePattern({ cmd: 'task_all' })
  all() {
    return this.taskService.all();
  }

  @MessagePattern({ cmd: 'task_cancel' })
  cancel(paramId: number) {
    return this.taskService.cancel(paramId);
  }

  @MessagePattern({ cmd: 'task_pay' })
  pay(data: number) {
    return this.taskService.pay(data);
  }
}
