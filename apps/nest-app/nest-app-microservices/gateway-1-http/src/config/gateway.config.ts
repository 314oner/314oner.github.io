import { ConfigType, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const gatewayConfigSchema = {
  LIKES_SERVICE_HOST: Joi.string().required(),
  LIKES_SERVICE_TCP_PORT: Joi.number().required(),
  LIKES_SERVICE_HTTP_PORT: Joi.string().required(),
  ORDERS_SERVICE_HOST: Joi.string().required(),
  ORDERS_SERVICE_TCP_PORT: Joi.number().required(),
  ORDERS_SERVICE_HTTP_PORT: Joi.string().required(),
  PAYMENTS_SERVICE_HOST: Joi.string().required(),
  PAYMENTS_SERVICE_TCP_PORT: Joi.number().required(),
  PAYMENTS_SERVICE_HTTP_PORT: Joi.string().required(),
  PETS_SERVICE_HOST: Joi.string().required(),
  PETS_SERVICE_TCP_PORT: Joi.number().required(),
  PETS_SERVICE_HTTP_PORT: Joi.string().required(),
  POSTS_SERVICE_HOST: Joi.string().required(),
  POSTS_SERVICE_TCP_PORT: Joi.number().required(),
  POSTS_SERVICE_HTTP_PORT: Joi.string().required(),
  TAGS_SERVICE_HOST: Joi.string().required(),
  TAGS_SERVICE_TCP_PORT: Joi.number().required(),
  TAGS_SERVICE_HTTP_PORT: Joi.string().required(),
  TASKS_SERVICE_HOST: Joi.string().required(),
  TASKS_SERVICE_TCP_PORT: Joi.number().required(),
  TASKS_SERVICE_HTTP_PORT: Joi.string().required(),
  USERS_SERVICE_HOST: Joi.string().required(),
  USERS_SERVICE_TCP_PORT: Joi.number().required(),
  USERS_SERVICE_HTTP_PORT: Joi.string().required(),
  AUTH_SERVICE_HOST: Joi.string().required(),
  AUTH_SERVICE_TCP_PORT: Joi.number().required(),
  AUTH_SERVICE_HTTP_PORT: Joi.string().required(),
  EVENTS_SERVICE_HOST: Joi.string().required(),
  EVENTS_SERVICE_TCP_PORT: Joi.number().required(),
  EVENTS_SERVICE_HTTP_PORT: Joi.string().required(),
  COMMENTS_SERVICE_HOST: Joi.string().required(),
  COMMENTS_SERVICE_TCP_PORT: Joi.number().required(),
  COMMENTS_SERVICE_HTTP_PORT: Joi.string().required(),
};

export const gatewayConfig = registerAs('gateway', () => ({
  likesServiceTcpPort: process.env.LIKES_SERVICE_TCP_PORT as unknown as number,
  likesServiceHost: process.env.LIKES_SERVICE_HOST as unknown as string,
  likesServiceHttpPort: process.env
    .LIKES_SERVICE_HTTP_PORT as unknown as string,
  ordersServiceTcpPort: process.env
    .ORDERS_SERVICE_TCP_PORT as unknown as number,
  ordersServiceHost: process.env.ORDERS_SERVICE_HOST as unknown as string,
  ordersServiceHttpPort: process.env
    .ORDERS_SERVICE_HTTP_PORT as unknown as string,
  paymentsServiceTcpPort: process.env
    .PAYMENTS_SERVICE_TCP_PORT as unknown as number,
  paymentsServiceHost: process.env.PAYMENTS_SERVICE_HOST as unknown as string,
  paymentsServiceHttpPort: process.env
    .PAYMENTS_SERVICE_HTTP_PORT as unknown as string,
  petsServiceTcpPort: process.env.PETS_SERVICE_TCP_PORT as unknown as number,
  petsServiceHost: process.env.PETS_SERVICE_HOST as unknown as string,
  petsServiceHttpPort: process.env.PETS_SERVICE_HTTP_PORT as unknown as string,
  postsServiceTcpPort: process.env.POSTS_SERVICE_TCP_PORT as unknown as number,
  postsServiceHost: process.env.POSTS_SERVICE_HOST as unknown as string,
  postsServiceHttpPort: process.env
    .POSTS_SERVICE_HTTP_PORT as unknown as string,
  tagsServiceTcpPort: process.env.TAGS_SERVICE_TCP_PORT as unknown as number,
  tagsServiceHost: process.env.TAGS_SERVICE_HOST as unknown as string,
  tagsServiceHttpPort: process.env.TAGS_SERVICE_HTTP_PORT as unknown as string,
  tasksServiceTcpPort: process.env.TASKS_SERVICE_TCP_PORT as unknown as number,
  tasksServiceHost: process.env.TASKS_SERVICE_HOST as unknown as string,
  tasksServiceHttpPort: process.env
    .TASKS_SERVICE_HTTP_PORT as unknown as string,
  usersServiceTcpPort: process.env.USERS_SERVICE_TCP_PORT as unknown as number,
  usersServiceHost: process.env.USERS_SERVICE_HOST as unknown as string,
  usersServiceHttpPort: process.env
    .USERS_SERVICE_HTTP_PORT as unknown as string,
  authServiceTcpPort: process.env.AUTH_SERVICE_TCP_PORT as unknown as number,
  authServiceHost: process.env.AUTH_SERVICE_HOST as unknown as string,
  authServiceHttpPort: process.env.AUTH_SERVICE_HTTP_PORT as unknown as string,
  eventsServiceTcpPort: process.env
    .EVENTS_SERVICE_TCP_PORT as unknown as number,
  eventsServiceHost: process.env.EVENTS_SERVICE_HOST as unknown as string,
  eventsServiceHttpPort: process.env
    .EVENTS_SERVICE_HTTP_PORT as unknown as string,

  commentsServiceTcpPort: process.env
    .COMMENTS_SERVICE_TCP_PORT as unknown as number,
  commentsServiceHost: process.env.COMMENTS_SERVICE_HOST as unknown as string,
  commentsServiceHttpPort: process.env
    .COMMENTS_SERVICE_HTTP_PORT as unknown as string,
}));

export type GatewayConfigType = ConfigType<typeof gatewayConfig>;
