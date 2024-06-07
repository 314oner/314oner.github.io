import { ConfigType, registerAs } from '@nestjs/config';

export const likesConfigSchema = {};

export const likesConfig = registerAs('likes', () => ({}));

export type LikesConfigType = ConfigType<typeof likesConfig>;
