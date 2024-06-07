import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const ordersConfigSchema = {
  PAYMENTS_SERVICE_HOST: Joi.string().required(),
  PAYMENTS_SERVICE_TCP_PORT: Joi.number().required(),
  PAYMENTS_SERVICE_HTTP_PORT: Joi.string().required(),
};

export const ordersConfig = registerAs('orders', () => ({
  paymentsServiceTcpPort: process.env
    .PAYMENTS_SERVICE_TCP_PORT as unknown as number,
  paymentsServiceHost: process.env.PAYMENTS_SERVICE_HOST as unknown as string,
  paymentsServiceHttpPort: process.env
    .PAYMENTS_SERVICE_HTTP_PORT as unknown as string,
}));

export type OrdersConfigType = ConfigType<typeof ordersConfig>;
