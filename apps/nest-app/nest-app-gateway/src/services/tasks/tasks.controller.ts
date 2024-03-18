import {
  Controller,
  Inject
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(
    @Inject('TASK_SERVICE') private readonly taskServiceClient: ClientProxy,
  ) { }
}
