import { ConfigurationKeyPaths } from '../../config/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        //JwtModule.register({})
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService<ConfigurationKeyPaths>) => ({
                secret: configService.get<string>('jwt.secret'),
                refresh: configService.get<string>('jwt.refresh')
            }),
            inject: [ConfigService]
        }),
    ],
    exports: [JwtModule]
})
export class AuthorizationModule { }
