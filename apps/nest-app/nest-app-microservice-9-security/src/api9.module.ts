import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule as FileConfigModule } from 'nestjs-config';

import { API9Controller } from './api9.controller';
import { API9Service } from './api9.service';

import ormConfig, { getDatabaseSystemIds } from './config/orm.config';

import * as path from 'path';

import { getEnvPath } from './utils/getEnvPath';

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
    //TypeOrmModule.forFeature([Tag], 'database-TAG'),
    FileConfigModule.load(
      path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'),
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: '.env',
      envFilePath,
    }),
    ...databasesConfigAsync,
  ],
  controllers: [API9Controller],
  providers: [API9Service],
})
export class API9Module {}
