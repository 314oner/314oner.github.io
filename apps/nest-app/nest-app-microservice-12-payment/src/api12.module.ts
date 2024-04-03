import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule as FileConfigModule } from 'nestjs-config';

import { API12Controller } from './api12.controller';
import { API12Service } from './api12.service';

import ormConfig, { getDatabaseSystemIds } from './config/orm.config';

import * as path from 'path';

import { getEnvPath } from './utils/getEnvPath';
import { PaymentModule } from './modules/payment/payment.module';

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
    PaymentModule,
    ...databasesConfigAsync,
  ],
  controllers: [API12Controller],
  providers: [API12Service],
})
export class API12Module {}
