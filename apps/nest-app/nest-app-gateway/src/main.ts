import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { logger } from './common/libs/log4js/logger.middleware';

//const GlobalPrefix = process.env.GLOBAL_PREFIX

export async function startGateway() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix(GlobalPrefix)
  app.use(logger);
  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addTag('orders')
    .addTag('payments')
    .addTag('users')
    .addTag('tasks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-api', app, document);
  await app.listen(3000, '0.0.0.0');
  const serverUrl = await app.getUrl();
  setTimeout(() => {
    Logger.log(`api: ${serverUrl}/`);
    Logger.log(`swagger: ${serverUrl}/swagger-api/`);
  }, 10000);
}

//startGateway();
