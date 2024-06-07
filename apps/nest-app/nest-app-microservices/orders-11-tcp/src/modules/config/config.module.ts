import {
  ordersConfig,
  ordersConfigSchema,
} from '@app/orders/config/orders.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, appConfigSchema } from '@shared/common/config/app.config';
import {
  databaseConfig,
  databaseConfigSchema,
} from '@shared/common/config/database.config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, ordersConfig],
      envFilePath: ['nest-app-microservices/orders-11-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...databaseConfigSchema,
        ...ordersConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
