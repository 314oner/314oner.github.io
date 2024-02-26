import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigModule as FileConfigModule } from 'nestjs-config';
import { AppController2 } from './api2.controller';
import { AppService2 } from './api2.service';
import ormConfig, { getDatabaseSystemIds } from './common/config/orm.config';
import { getEnvPath } from 'utils/getEnvPath';
import { CarManufacturersModule } from './modules/car-manufacturers/car-manufacturers.module';

import * as path from 'path';

const envFilePath: string = getEnvPath(`${__dirname}`);

const databasesConfigAsync = getDatabaseSystemIds().map((systemId) => {
  return TypeOrmModule.forRootAsync({
    name: `database-${systemId}`,
    imports: [ConfigModule.forFeature(ormConfig)],
    useFactory: (config: ConfigService) => config.get(`orm.${systemId}`),
    inject: [ConfigService],
  });
});

@Module({
  imports: [
    FileConfigModule.load(
      path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: '.env',
      envFilePath,
    }),
    ...databasesConfigAsync,
    CarManufacturersModule,
  ],
  controllers: [AppController2],
  providers: [AppService2],
})
export class AppModule2 { }
