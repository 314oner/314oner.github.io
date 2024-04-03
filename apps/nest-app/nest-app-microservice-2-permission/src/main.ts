import { NestFactory } from '@nestjs/core';
import { API2Module } from './api2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService2() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API2Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2998,
      },
    },
  );

  await app.listen();
}
