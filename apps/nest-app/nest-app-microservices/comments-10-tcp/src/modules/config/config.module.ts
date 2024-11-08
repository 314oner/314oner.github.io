import {
  commentsConfig,
  commentsConfigSchema,
} from '@app/comments/config/comments.config';
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
      load: [appConfig, commentsConfig, databaseConfig],
      envFilePath: ['nest-app-microservices/comments-10-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...commentsConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
