import { NestFactory } from '@nestjs/core';
import { API8Module } from './api8.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService8() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API8Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2992,
      },
    },
  );

  await app.listen();
}
