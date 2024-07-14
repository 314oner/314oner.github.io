import { AuthConfigType, authConfig } from '@app/auth/config/auth.config';
import { TokenEntity } from '@app/auth/entities/token.entity';
import { TokenRepository } from '@app/auth/modules/token/repositories';
import { TokenController } from '@app/auth/modules/token/token.controller';
import { TokenService } from '@app/auth/modules/token/token.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [authConfig.KEY],
      useFactory: (config: AuthConfigType) => ({
        secret: config.secret,
        signOptions: {
          expiresIn: config.expires,
        },
      }),
    }),
    TypeOrmModule.forFeature([TokenEntity]),
  ],
  controllers: [TokenController],
  providers: [DoesNotExist, TokenRepository, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
