import { LikeEntity } from '@app/likes/entities/like.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class LikeRepository {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>,
  ) {}
  async likePost(likeDto: any) {
    const like = new LikeEntity();
    like.user = likeDto.userId;
    like.post = likeDto.postId;
    const newLike = await this.likeRepository.save(like);
    return await this.likeRepository.findOne({
      where: { id: newLike.id },
      relations: ['post'],
    });
  }
}
