import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getConfiguration } from './config/configuration';
import { TasksController } from './services/tasks/tasks.controller';
import { OrdersController } from './services/orders/orders.controller';
import { OrdersService } from './services/orders/orders.service';
import { PaymentsController } from './services/payments/payments.controller';
import { PaymentsService } from './services/payments/payments.service';
import { TasksService } from './services/tasks/tasks.service';
import { TagsController } from './services/tags/tags.controller';
import { TagsService } from './services/tags/tags.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [getConfiguration],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2999,
        },
      },
      {
        name: 'API_2',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2998,
        },
      },
      {
        name: 'TOKEN_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2997,
        },
      },
      {
        name: 'API_4',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2996,
        },
      },
      {
        name: 'SERVICE_TASKS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2995,
        },
      },
      {
        name: 'API_6',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2994,
        },
      },
      {
        name: 'SERVICE_TAG',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2993,
        },
      },
      {
        name: 'API_8',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2992,
        },
      },
      {
        name: 'API_9',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2991,
        },
      },
      {
        name: 'API_10',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2990,
        },
      },
      {
        name: 'SERVICE_ORDER',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2989,
        },
      },
      {
        name: 'SERVICE_PAYMENT',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2988,
        },
      },
      {
        name: 'API_13',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2987,
        },
      },
      {
        name: 'SERVICE_PET',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 2986,
        },
      },
    ]),
  ],
  controllers: [
    OrdersController,
    PaymentsController,
    TasksController,
    TagsController,
  ],
  providers: [OrdersService, PaymentsService, TasksService, TagsService],
})
export class AppModule {}
