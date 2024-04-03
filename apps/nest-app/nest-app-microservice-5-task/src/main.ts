import { NestFactory } from '@nestjs/core';
import { API5Module } from './api5.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService5() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API5Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2995,
      },
    },
  );

  await app.listen();
}
