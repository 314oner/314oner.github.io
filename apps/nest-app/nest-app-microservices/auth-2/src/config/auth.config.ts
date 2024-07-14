import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const authConfigSchema = {
  USERS_SERVICE_HOST: Joi.string().required(),
  USERS_SERVICE_TCP_PORT: Joi.number().required(),
  USERS_SERVICE_HTTP_PORT: Joi.string().required(),
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
  TOKEN_EXPIRY: Joi.string().required(),
};

export const authConfig = registerAs('auth', () => ({
  usersServiceTcpPort: process.env.USERS_SERVICE_TCP_PORT as unknown as number,
  usersServiceHost: process.env.USERS_SERVICE_HOST as unknown as string,
  usersServiceHttpPort: process.env
    .USERS_SERVICE_HTTP_PORT as unknown as string,
  secret: process.env.JWT_ACCESS_TOKEN_SECRET!,
  refresh: process.env.JWT_REFRESH_TOKEN_SECRET!,
  expires: process.env.TOKEN_EXPIRY!,
}));

export type AuthConfigType = ConfigType<typeof authConfig>;
