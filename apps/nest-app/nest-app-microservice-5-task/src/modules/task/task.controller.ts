import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { TaskService } from './task.service';
import { ITask } from './interfaces/task.interface';
import { ITaskUpdateParams } from './interfaces/task-update-params.interface';
import { ITaskSearchByUserResponse } from './interfaces/task-search-by-user-response.interface';
import { ITaskDeleteResponse } from './interfaces/task-delete-response.interface';
import { ITaskCreateResponse } from './interfaces/task-create-response.interface';
import { ITaskUpdateByIdResponse } from './interfaces/task-update-by-id-response.interface';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @MessagePattern('task_search_by_user_id')
  public async taskSearchByUserId(
    userId: number,
  ): Promise<any> {
    let result: any;

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

  @MessagePattern('task_create')
  public async taskCreate(taskBody: any): Promise<any> {
    let result: any;

    if (taskBody) {
      try {
        taskBody.notification_id = null;
        taskBody.is_solved = false;
        const task = await this.taskService.createTask(taskBody);
        result = {
          status: HttpStatus.CREATED,
          message: 'task_create_success',
          task,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'task_create_precondition_failed',
          task: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'task_create_bad_request',
        task: null,
        errors: null,
      };
    }

    return result;
  }
}
