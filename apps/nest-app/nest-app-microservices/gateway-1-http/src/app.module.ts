import {
  GatewayConfigType,
  gatewayConfig,
} from '@app/gateway/config/gateway.config';
import { WrappedConfigModule } from '@app/gateway/modules/config/config.module';

import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HomeModule } from '@shared/common/modules/home/home.module';
import { LoggerModule } from '@shared/common/modules/logger/logger.module';
import {
  AUTH_SERVICE_TOKEN,
  COMMENTS_SERVICE_TOKEN,
  EVENTS_SERVICE_TOKEN,
  LIKE_SERVICE_TOKEN,
  ORDERS_SERVICE_TOKEN,
  PAYMENTS_SERVICE_TOKEN,
  PETS_SERVICE_TOKEN,
  POSTS_SERVICE_TOKEN,
  TAGS_SERVICE_TOKEN,
  TASKS_SERVICE_TOKEN,
  USERS_SERVICE_TOKEN,
} from '@shared/common/tokens';
import { HttpExceptionFilter } from '@shared/common/utils/filters/http-exception.filter';
import { validationOptions } from '@shared/common/utils/validation-options';
import { CommentsController } from './comments.controller';
import { EventsController } from './events.controller';
import { AuthGuard } from './guards/authorization.guard';
import { LikesController } from './likes.controller';
import { OrdersController } from './orders.controller';
import { PaymentsController } from './payments.controller';
import { PetsController } from './pets.controller';
import { PostsController } from './posts.controller';
import { TagsController } from './tags.controller';
import { TasksController } from './tasks.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [
    WrappedConfigModule,
    HomeModule,
    LoggerModule,
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.authServiceHost,
            port: config.authServiceTcpPort,
          },
        }),
      },
      {
        name: EVENTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.eventsServiceHost,
            port: config.eventsServiceTcpPort,
          },
        }),
      },
      {
        name: LIKE_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.likesServiceHost,
            port: config.likesServiceTcpPort,
          },
        }),
      },
      {
        name: ORDERS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.ordersServiceHost,
            port: config.ordersServiceTcpPort,
          },
        }),
      },
      {
        name: PAYMENTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.paymentsServiceHost,
            port: config.paymentsServiceTcpPort,
          },
        }),
      },

      {
        name: PETS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.petsServiceHost,
            port: config.petsServiceTcpPort,
          },
        }),
      },
      {
        name: POSTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.postsServiceHost,
            port: config.postsServiceTcpPort,
          },
        }),
      },
      {
        name: TAGS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.tagsServiceHost,
            port: config.tagsServiceTcpPort,
          },
        }),
      },
      {
        name: TASKS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.tasksServiceHost,
            port: config.tasksServiceTcpPort,
          },
        }),
      },
      {
        name: USERS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.usersServiceHost,
            port: config.usersServiceTcpPort,
          },
        }),
      },
      {
        name: COMMENTS_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [gatewayConfig.KEY],
        useFactory: (config: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.commentsServiceHost,
            port: config.commentsServiceTcpPort,
          },
        }),
      },
    ]),
  ],
  controllers: [
    EventsController,
    LikesController,
    OrdersController,
    PaymentsController,
    PetsController,
    PostsController,
    TagsController,
    UsersController,
    TasksController,
    UsersController,
    CommentsController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(validationOptions),
    },
    {
      provide: APP_FILTER,
      useValue: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
