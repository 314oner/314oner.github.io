import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const redisConfigSchema = {
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.string().required(),
  REDIS_PASSWORD: Joi.number().port().required(),
  REDIS_DB: Joi.string().required(),
};

export const redisConfig = registerAs('redis', () => ({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DB,
}));

export type DatabaseConfigType = ConfigType<typeof redisConfig>;
