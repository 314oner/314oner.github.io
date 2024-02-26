import { NestFactory } from '@nestjs/core';
import { Api4Module } from './api4.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const msOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 2996,
  },
};

export async function startApi4(port: number = 2996): Promise<number> {
  const app = await NestFactory.createMicroservice(Api4Module, msOptions);
  return app.listen();
}
startApi4();
