import {
  Controller,
  Inject,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService
  ) { }
  //#API tasksService - get all orders
  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  //#API tasksService - create order
  @Post()
  createTask(
    @Body('description') taskDescription: string,
  ) {
    return this.tasksService.createTask(taskDescription);
  }

  //#API tasksService - get specific order details
  @Delete(':id')
  deleteTask(
    @Param('id') paramTaskId: number
  ) {
    return this.tasksService.deleteTask(paramTaskId);
  }

  //#API tasksService - cancel order
  @Put(':id')
  updateTask(
    @Body('id') taskId: number
  ) {
    return this.tasksService.updateTask(taskId);
  }

}
