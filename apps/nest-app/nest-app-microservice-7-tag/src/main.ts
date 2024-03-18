import { NestFactory } from '@nestjs/core';
import { API7Module } from './api7.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService7() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API7Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2993,
      },
    },
  );

  await app.listen();
}
