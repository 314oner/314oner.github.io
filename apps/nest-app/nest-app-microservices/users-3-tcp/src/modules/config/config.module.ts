import { usersConfig, usersConfigSchema } from '@app/users/config/users.config';
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
      load: [appConfig, databaseConfig, usersConfig],
      envFilePath: ['nest-app-microservices/users-3-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...databaseConfigSchema,
        ...usersConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
