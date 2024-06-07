import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfigType, appConfig } from '@shared/common/config/app.config';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const appConfigValues = app.get<AppConfigType>(appConfig.KEY);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: appConfigValues.tcpPort,
    },
  } as TcpOptions);
  app.enableShutdownHooks();
  app.setGlobalPrefix(appConfigValues.apiPrefix, {
    exclude: ['/'],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const options = new DocumentBuilder()
    .setTitle('API docs')
    .setDescription(`${appConfigValues.name} Docs`)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'authorization',
    )
    //v1
    .addTag('users')
    .addTag('posts')
    .addTag('likes')
    .addTag('orders')
    .addTag('payments')
    .addTag('tags')
    //dev stage
    .addTag('pets')
    .addTag('tasks')
    .addTag('events')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();
  await app.listen(appConfigValues.httPort);
  Logger.log(
    `${appConfigValues.name}` +
      ` docs running on: ${appConfigValues.httPort}/docs`,
  );
}
void bootstrap();
