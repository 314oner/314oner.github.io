import { NestFactory } from '@nestjs/core';
import { API14Module } from './api14.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService14() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API14Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2986,
      },
    },
  );

  await app.listen();
}
