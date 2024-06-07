import { AppModule } from '@app/likes/app.module';
import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { AppConfigType, appConfig } from '@shared/common/config/app.config';
import { useContainer } from 'class-validator';

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

  await app.startAllMicroservices();
  await app.listen(appConfigValues.httPort);
  Logger.log(
    `${appConfigValues.name}` + ` running on port: ${appConfigValues.tcpPort}`,
  );
  Logger.log(` All endpoints running on: http://localhost:8081/docs`);
}

void bootstrap();
