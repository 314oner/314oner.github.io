import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

export const getDatabaseSystemIds = (): string[] => {
  return process.env.DATABASE_SYSTEM_IDS.split(',');
};

export default registerAs('orm', () => {
  var config = {};
  getDatabaseSystemIds().forEach((systemId) => {
    config[systemId] = {
      //name: `database-${systemId}`,
      type: process.env[`${systemId}_TYPE`],
      url: process.env[`${systemId}_URL`],
      port: parseInt(process.env[`${systemId}_PORT`]),
      username: process.env[`${systemId}_CLIENT_ID`],
      password: process.env[`${systemId}_CLIENT_SECRET`],
      database: process.env[`${systemId}_PROJECT`],
      synchronize: process.env[`${systemId}_SYNCHRONIZE`] === 'true',
      tls: process.env[`${systemId}_SYNCHRONIZE`] === 'true',
      seNewUrlParser: process.env[`${systemId}_SYNCHRONIZE`] === 'true',
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    };
  });

  return config;
});
