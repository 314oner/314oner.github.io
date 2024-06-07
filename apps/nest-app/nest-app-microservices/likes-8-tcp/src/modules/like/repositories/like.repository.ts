import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikeEntity } from '../enitities/like.entity';
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
