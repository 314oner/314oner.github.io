import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfiguration } from './config/configuration';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RedisModule } from './common/libs/redis/redis.module';
import { RedisClientOptions } from '@liaoliaots/nestjs-redis';
import { SharedModule } from './shared/shared.module';
import ormConfig, { getDatabaseSystemIds } from './common/typeorm/orm.config';
import { BookstoreModule } from './microservices/bookstore.module';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';
import { TokenModule } from './modules/token/token.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { FileModule } from './modules/file/file.module';
import { SecurityModule } from './modules/security/security.module';
import { PostModule } from './modules/post/post.module';
import { LikeModule } from './modules/like/like.module';
import { CommentModule } from './modules/comment/comment.module';
import * as path from 'path';

const databasesConfigAsync = getDatabaseSystemIds().map((systemId) => {
  return TypeOrmModule.forRootAsync({
    name: `database-${systemId}`,
    imports: [ConfigModule.forFeature(ormConfig)],
    useFactory: (config: ConfigService) => config.get(`orm.${systemId}`),
    inject: [ConfigService],
  });
});
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [getConfiguration],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    RedisModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            closeClient: true,
            config: configService.get<RedisClientOptions>('redis'),
          };
        },
      },
      true
    ),
    SharedModule,
    BookstoreModule,
    TagModule,
    PostModule,
    UserModule,
    SecurityModule,
    TokenModule,
    AuthorizationModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'www'),
    }),
    LikeModule,
    CommentModule,
    TagModule,
    ...databasesConfigAsync,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiModule { }
