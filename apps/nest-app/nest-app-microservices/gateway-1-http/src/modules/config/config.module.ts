import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import {
  gatewayConfig,
  gatewayConfigSchema,
} from '@app/gateway/config/gateway.config';
import { appConfig, appConfigSchema } from '@shared/common/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, gatewayConfig],
      envFilePath: ['nest-app-microservices/gateway-1-http/.env'],
      validationSchema: Joi.object({
        ...appConfigSchema,
        ...gatewayConfigSchema,
      }),
    }),
  ],
})
export class WrappedConfigModule {}
