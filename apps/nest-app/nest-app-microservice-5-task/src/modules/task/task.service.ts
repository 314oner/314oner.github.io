import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '../../config/config.service';
import { Repository } from 'typeorm';
import { Task } from '@apps/nest-app-shared';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ITask } from './interfaces/task.interface';
const logger = new Logger();

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task, 'database-S5')
    private taskRepository: Repository<Task>,
    @Inject('SERVICE_PAYMENT') private readonly clientPaymentApp: ClientProxy,
    private readonly configService: ConfigService,
  ) {}
  async createTask(taskBody: ITask) {
    const task = this.taskRepository.create();
    //let { name, description, user_id, start_time, duration, is_solved, notification_id, created_at } = taskBody;
    task.name = taskBody?.name;
    task.description = taskBody?.description;
    task.user_id = taskBody?.user_id;
    task.start_time = taskBody?.start_time;
    task.duration = taskBody?.duration;
    task.is_solved = taskBody?.is_solved;
    task.notification_id = taskBody?.notification_id;
    task.created_at = taskBody?.created_at;

    await this.taskRepository.save(task);
    return true;
  }

  async getTasksByUserId(userId: number): Promise<unknown> {
    const task = await this.taskRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!task) {
      throw new RpcException('Task not found.');
    }
    logger.log('Return task details for userId: ' + userId);

    return task;
  }

  //To get order details by order id
  async find(id: string): Promise<unknown> {
    return id;
  }

  //To get all task list
  async all(): Promise<unknown> {
    return true;
  }

  //To do cancel task by id
  async cancel(id: number): Promise<unknown> {
    return id;
  }

  //To do task confirmation
  async confirm(id: number = 1, paymentData: unknown): Promise<unknown> {
    return { id, paymentData };
  }
  //To do checking task before proceed payment
  async pay(id: number = 1) {
    return id;
  }
}
