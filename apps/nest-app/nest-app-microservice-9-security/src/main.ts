import { NestFactory } from '@nestjs/core';
import { API9Module } from './api9.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService9() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API9Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2991,
      },
    },
  );

  await app.listen();
}
