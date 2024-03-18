import { NestFactory } from '@nestjs/core';
import { API1Module } from './api1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService1() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API1Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2999,
      },
    },
  );

  await app.listen();
}
