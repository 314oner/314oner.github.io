import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
  databaseConfig,
  DatabaseConfigType,
} from '@shared/common/config/database.config';
import { SnakeNamingStrategy } from '@shared/common/utils/database/snake-naming.strategy';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly databaseConfigValues: DatabaseConfigType,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.databaseConfigValues.type,
      host: this.databaseConfigValues.host,
      port: this.databaseConfigValues.port,
      username: this.databaseConfigValues.username,
      password: this.databaseConfigValues.password,
      database: this.databaseConfigValues.name,
      synchronize: this.databaseConfigValues.synchronize,
      autoLoadEntities: true,
      migrationsTableName: '_migrations',
      migrationsRun: true,
      dropSchema: false,
      keepConnectionAlive: true,
      logging: false,
      extra: {
        max: this.databaseConfigValues.maxConnections,
        ssl: this.databaseConfigValues.sslEnabled
          ? {
              rejectUnauthorized: this.databaseConfigValues.rejectUnauthorized,
              ca: this.databaseConfigValues.ca ?? undefined,
              key: this.databaseConfigValues.key ?? undefined,
              cert: this.databaseConfigValues.cert ?? undefined,
            }
          : undefined,
      },
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}
