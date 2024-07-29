import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from '../utils/database/snake-naming.strategy';

export const config = {
  type: 'sqlite' as any,
  host: '0.0.0.0',
  port: 5432,
  username: 'root',
  password: 'secret',
  database: '314oner.sqlite3',
  synchronize: false,
  multipleStatements: 'typeorm',
  entities: ['dist/nest-app-microservices/**/src/entities/*.entity.js'],
  migrationsRun: false,
  dropSchema: true,
  migrations: ['dist/nest-app-microservices/**/src/migrations/*.js'],
  namingStrategy: new SnakeNamingStrategy(),
};
export default registerAs('migration', () => config);
export const connectionSourse = new DataSource(config as DataSourceOptions);
