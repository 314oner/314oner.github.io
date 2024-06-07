import { ConfigType, registerAs } from '@nestjs/config';

export const petsConfigSchema = {};

export const petsConfig = registerAs('pets', () => ({}));

export type PetsConfigType = ConfigType<typeof petsConfig>;
