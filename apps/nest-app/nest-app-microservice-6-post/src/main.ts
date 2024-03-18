import { NestFactory } from '@nestjs/core';
import { API6Module } from './api6.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService6() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API6Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2994,
      },
    },
  );

  await app.listen();
}
