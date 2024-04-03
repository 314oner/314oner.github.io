import { NestFactory } from '@nestjs/core';
import { API11Module } from './api11.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService11() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API11Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2989,
      },
    },
  );

  await app.listen();
}
