import { LikeEntity } from '@app/likes/modules/like/enitities';
import { TagEntity } from '@app/tags/modules/tag/enitities';
import { UserEntity } from '@app/users/modules/user/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './enitities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './repositories/post.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, LikeEntity, UserEntity, TagEntity]),
  ],
  controllers: [PostController],
  providers: [PostService, PostRepository],
  exports: [PostService],
})
export class PostModule {}
