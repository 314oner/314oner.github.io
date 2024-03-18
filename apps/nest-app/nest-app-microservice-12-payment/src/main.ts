import { NestFactory } from '@nestjs/core';
import { API12Module } from './api12.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService12() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API12Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2988,
      },
    },
  );

  await app.listen();
}
