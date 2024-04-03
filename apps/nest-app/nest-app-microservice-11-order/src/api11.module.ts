import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule as FileConfigModule } from 'nestjs-config';

import { API11Controller } from './api11.controller';
import { API11Service } from './api11.service';

import ormConfig, { getDatabaseSystemIds } from './config/orm.config';

import * as path from 'path';

import { getEnvPath } from './utils/getEnvPath';
import { OrderModule } from './modules/order/order.module';

const databasesConfigAsync = getDatabaseSystemIds().map((systemId) => {
  return TypeOrmModule.forRootAsync({
    name: `database-${systemId}`,
    imports: [ConfigModule.forFeature(ormConfig)],
    useFactory: (config: ConfigService) => config.get(`orm.${systemId}`),
    inject: [ConfigService],
  });
});

const envFilePath: string = getEnvPath(`${__dirname}`);

@Module({
  imports: [
    FileConfigModule.load(
      path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'),
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: '.env',
      envFilePath,
    }),
    OrderModule,
    ...databasesConfigAsync,
  ],
  controllers: [API11Controller],
  providers: [API11Service],
})
export class API11Module {}
