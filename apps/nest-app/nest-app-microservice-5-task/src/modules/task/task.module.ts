import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '@apps/nest-app-shared';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task], 'database-S5'),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }
