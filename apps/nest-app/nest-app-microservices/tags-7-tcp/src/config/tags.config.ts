import { ConfigType, registerAs } from '@nestjs/config';

export const tagsConfigSchema = {};

export const tagsConfig = registerAs('tags', () => ({}));

export type TagsConfigType = ConfigType<typeof tagsConfig>;
