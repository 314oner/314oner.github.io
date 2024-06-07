import { postsConfig, postsConfigSchema } from '@app/posts/config/posts.config';
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
      load: [appConfig, postsConfig, databaseConfig],
      envFilePath: ['nest-app-microservices/posts-9-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...postsConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
