import { LikeEntity } from '@app/likes/entities/like.entity';
import { PostEntity } from '@app/posts/entities/post.entity';
import { TagEntity } from '@app/tags/entities/tag.entity';
import { UserEntity } from '@app/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { LikeRepository } from './repositories/like.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([LikeEntity, UserEntity, PostEntity, TagEntity]),
  ],
  controllers: [LikeController],
  providers: [DoesNotExist, LikeService, LikeRepository],
  exports: [LikeService],
})
export class LikeModule {}
