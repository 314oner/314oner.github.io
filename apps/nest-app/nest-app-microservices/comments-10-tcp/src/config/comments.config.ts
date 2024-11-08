import { ConfigType, registerAs } from '@nestjs/config';

export const commentsConfigSchema = {};

export const commentsConfig = registerAs('comments', () => ({}));

export type CommentsConfigType = ConfigType<typeof commentsConfig>;
