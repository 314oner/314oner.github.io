import { NestFactory } from '@nestjs/core';
import { Api5Module } from './api5.module';

export async function startApi5(port: number = 2995): Promise<number> {
  const app = await NestFactory.create(Api5Module);
  await app.listen(port);
  return port;
}
startApi5();
