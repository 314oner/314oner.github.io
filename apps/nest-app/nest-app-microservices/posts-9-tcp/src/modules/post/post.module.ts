import { LikeEntity } from '@app/likes/entities/like.entity';
import { PostEntity } from '@app/posts/entities/post.entity';
import { TagEntity } from '@app/tags/entities/tag.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
