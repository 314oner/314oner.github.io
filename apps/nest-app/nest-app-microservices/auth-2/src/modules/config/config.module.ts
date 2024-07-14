import { authConfig, authConfigSchema } from '@app/auth/config/auth.config';
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
      load: [appConfig, databaseConfig, authConfig],
      envFilePath: ['nest-app-microservices/auth-2/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...databaseConfigSchema,
        ...authConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
