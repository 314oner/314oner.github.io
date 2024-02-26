import { NestFactory } from '@nestjs/core';
import { Api3Module } from './api3.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const msOptions: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'api',
      brokers: ['localhost:9093'],
    },
    consumer: {
      groupId: 'api3-consumer',
    },
  },
};

export async function startApi3(port: number = 2997): Promise<number> {
  const app = await NestFactory.createMicroservice(Api3Module, msOptions);
  return app.listen();
}
