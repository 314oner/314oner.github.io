import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigModule as FileConfigModule } from 'nestjs-config';
import ormConfig, { getDatabaseSystemIds } from './common/config/orm.config';
import * as path from 'path';
import { Api4Controller } from './api4.controller';
import { Api4Service } from './api4.service';

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
      envFilePath: '.env',
    }),
    ...databasesConfigAsync,
  ],
  controllers: [Api4Controller],
  providers: [Api4Service],
})
export class Api4Module {}
