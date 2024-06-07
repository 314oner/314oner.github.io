import { petsConfig, petsConfigSchema } from '@app/pets/config/pets.config';
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
      load: [appConfig, petsConfig, databaseConfig],
      envFilePath: ['nest-app-microservices/pets-14-tcp/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...petsConfigSchema,
        ...databaseConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
