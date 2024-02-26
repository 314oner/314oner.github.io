import { NestFactory } from '@nestjs/core';
import { AppModule2 } from './api2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const msOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 2998,
  },
};

export async function startApi2(port: number = 2998): Promise<number> {
  const app = await NestFactory.createMicroservice(AppModule2, msOptions);
  return app.listen();
}
//startApi2();
