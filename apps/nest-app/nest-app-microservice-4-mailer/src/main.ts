import { NestFactory } from '@nestjs/core';
import { API4Module } from './api4.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService4() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API4Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2996,
      },
    },
  );

  await app.listen();
}
