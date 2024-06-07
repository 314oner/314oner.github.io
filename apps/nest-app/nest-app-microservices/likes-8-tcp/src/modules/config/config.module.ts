import { likesConfig, likesConfigSchema } from '@app/likes/config/likes.config';
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
      load: [appConfig, likesConfig, databaseConfig],
      envFilePath: ['nest-app-microservices/likes-8-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...likesConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
