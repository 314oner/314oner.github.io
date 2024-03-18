import { Injectable, Logger } from '@nestjs/common';
import { Task } from '@apps/nest-app-shared';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

const logger = new Logger();

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task, 'database-S5')
    private taskRepository: Repository<Task>,
  ) { }
  public async getTasksByUserId(userId: number): Promise<any> {

    const task = await this.taskRepository.findOne({
      where: {
        id: userId
      }
    });
    if (!task) {
      throw new RpcException('Task not found.');
    }
    logger.log('Return task details for userId: ' + userId);

    return task;
  }

  public async createTask(paramData: any) {
    const order = this.taskRepository.create();
    order.description = paramData.taskDescription;

    await this.taskRepository.save(order);
  }
}
