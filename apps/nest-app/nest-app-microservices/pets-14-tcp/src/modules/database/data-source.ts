/* eslint-disable @typescript-eslint/no-misused-promises, no-async-promise-executor */
import { WrappedConfigModule } from '@app/pets/modules/config/config.module';
import { WrappedDatabaseModule } from '@app/pets/modules/database/database.module';
import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

@Module({
  imports: [WrappedConfigModule, WrappedDatabaseModule],
})
class ModuleWithDataSource {}

export const AppDataSource: Promise<DataSource> = new Promise(
  async (resolve) => {
    const app = await NestFactory.create(ModuleWithDataSource);
    const dataSource = app.get(DataSource);
    await app.close();

    resolve(dataSource);
  },
);
