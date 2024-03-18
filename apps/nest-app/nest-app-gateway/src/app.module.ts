import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';

import { AuthGuard } from './services/guards/authorization.guard';
import { PermissionGuard } from './services/guards/permission.guard';

import { UsersController } from './services/users/users.controller';
import { TasksController } from './services/tasks/tasks.controller';
import { OrdersController } from './services/orders/orders.controller';
import { OrdersService } from './services/orders/orders.service';
import { getConfiguration } from './config/configuration';

import { PaymentsController } from './services/payments/payments.controller';
import { PaymentsService } from './services/payments/payments.service';

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
        name: 'TASK_SERVICE',
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
        name: 'API_7',
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
    ])
  ],
  controllers: [UsersController, TasksController, OrdersController, PaymentsController],
  providers: [
    OrdersService,
    PaymentsService
  ],
})
export class AppModule { }
