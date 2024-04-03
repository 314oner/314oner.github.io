import { NestFactory } from '@nestjs/core';
import { API3Module } from './api3.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService3() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API3Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2997,
      },
    },
  );

  await app.listen();
}
