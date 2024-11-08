import { CommentEntity } from '@app/comments/entities/comment.entity';
import { LikeEntity } from '@app/likes/entities/like.entity';
import { PostEntity } from '@app/posts/entities/post.entity';
import { TagEntity } from '@app/tags/entities/tag.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './repositories/comment.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommentEntity,
      LikeEntity,
      PostEntity,
      UserEntity,
      TagEntity,
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: [CommentService],
})
export class CommentModule {}
