import { LikeEntity } from '@app/likes/modules/like/enitities/like.entity';
import { PostEntity } from '@app/posts/modules/post/enitities/post.entity';
import { TagEntity } from '@app/tags/modules/tag/enitities/tag.entity';
import { UsersConfigType, usersConfig } from '@app/users/config/users.config';
import { UserRepository } from '@app/users/modules/user/repositories';
import { UserController } from '@app/users/modules/user/user.controller';
import { UserService } from '@app/users/modules/user/user.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AUTH_SERVICE_TOKEN } from '@shared/common/tokens';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE_TOKEN,
        imports: [ConfigModule],
        inject: [usersConfig.KEY],
        useFactory: (config: UsersConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: config.authServiceHost,
            port: config.authServiceTcpPort,
          },
        }),
      },
    ]),
    TypeOrmModule.forFeature([UserEntity, PostEntity, LikeEntity, TagEntity]),
  ],
  controllers: [UserController],
  providers: [DoesNotExist, UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
