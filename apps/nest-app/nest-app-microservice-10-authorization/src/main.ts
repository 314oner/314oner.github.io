import { NestFactory } from '@nestjs/core';
import { API10Module } from './api10.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export async function startService10() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    API10Module,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 2990,
      },
    },
  );

  await app.listen();
}
