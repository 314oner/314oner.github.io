import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //#API taskService - create task
  @Post('task/create')
  createOrder(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('user_id') user_id: string,
    @Body('start_time') start_time: number,
    @Body('duration') duration: number,
    @Body('is_solved') is_solved: boolean,
    @Body('notification_id') notification_id: number,
    @Body('created_at') created_at: number,
  ) {
    return this.tasksService.createTask(
      name,
      description,
      user_id,
      start_time,
      duration,
      is_solved,
      notification_id,
      created_at,
    );
  }

  //#API taskService - get specific task details
  @Get('task/find/:id')
  findTask(@Param('id') paramTaskId: number) {
    return this.tasksService.findTask(paramTaskId);
  }

  //#API taskService - get all tasks
  @Get('task/all')
  allTask() {
    return this.tasksService.allTask();
  }

  //#API taskService - cancel task
  @Post('task/cancel')
  cancelTask(@Body('id') taskId: number) {
    return this.tasksService.cancelTask(taskId);
  }

  //#API taskService - confirm task
  @Post('task/pay')
  payTask(@Body('id') orderId: number) {
    return this.tasksService.payTask(orderId);
  }
}
