import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const usersConfigSchema = {
  AUTH_SERVICE_HOST: Joi.string().required(),
  AUTH_SERVICE_TCP_PORT: Joi.number().required(),
};

export const usersConfig = registerAs('users', () => ({
  authServiceHost: process.env.AUTH_SERVICE_HOST,
  authServiceTcpPort: process.env.AUTH_SERVICE_TCP_PORT as unknown as number,
}));

export type UsersConfigType = ConfigType<typeof usersConfig>;
