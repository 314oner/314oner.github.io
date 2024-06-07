import {
  eventsConfig,
  eventsConfigSchema,
} from '@app/events/config/events.config';
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
      load: [appConfig, databaseConfig, eventsConfig],
      envFilePath: ['nest-app-microservices/events-15-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...databaseConfigSchema,
        ...eventsConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
