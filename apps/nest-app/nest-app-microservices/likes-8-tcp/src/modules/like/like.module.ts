import { PostEntity } from '@app/posts/modules/post/enitities';
import { TagEntity } from '@app/tags/modules/tag/enitities';
import { UserEntity } from '@app/users/modules/user/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoesNotExist } from '@shared/common/utils/validators/does-not-exist.validator';
import { LikeEntity } from './enitities/like.entity';
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
