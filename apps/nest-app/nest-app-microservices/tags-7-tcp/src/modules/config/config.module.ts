import { tagsConfig, tagsConfigSchema } from '@app/tags/config/tags.config';
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
      load: [appConfig, tagsConfig, databaseConfig],
      envFilePath: ['nest-app-microservices/tags-7-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...tagsConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
