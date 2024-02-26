import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from '../../models/token.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { TokenService } from './token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurationKeyPaths } from '../../config/configuration';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User], 'database-MAIN'),
    TypeOrmModule.forFeature([Token], 'database-FR'),
    //TypeOrmModule.forFeature([User], 'database-DE'),
    //TypeOrmModule.forFeature([User], 'database-GB'),
    //JwtModule.register({}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<ConfigurationKeyPaths>) => ({
        secret: configService.get<string>('jwt.secret'),
        refresh: configService.get<string>('jwt.refresh')
      }),
      inject: [ConfigService]
    }),
    UserModule,
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule { }
