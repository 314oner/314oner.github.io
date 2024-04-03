import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ConfigService } from '../../config/config.service';
import { Task } from '@apps/nest-app-shared';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task], 'database-S5'),
    ClientsModule.register([
      {
        name: 'SERVICE_PAYMENT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2988,
        },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService, ConfigService],
})
export class TaskModule {}
