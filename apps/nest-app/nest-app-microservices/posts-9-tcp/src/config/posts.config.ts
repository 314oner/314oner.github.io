import { ConfigType, registerAs } from '@nestjs/config';

export const postsConfigSchema = {};

export const postsConfig = registerAs('posts', () => ({}));

export type PostsConfigType = ConfigType<typeof postsConfig>;
