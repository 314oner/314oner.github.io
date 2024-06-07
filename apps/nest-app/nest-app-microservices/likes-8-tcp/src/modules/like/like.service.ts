import { Injectable } from '@nestjs/common';
import { LikeRepository } from './repositories/like.repository';
@Injectable()
export class LikeService {
  constructor(private readonly likeRepository: LikeRepository) {}
  async likePost(likeDto: any) {
    const likePost = this.likeRepository.likePost(likeDto);
    return likePost;
  }
}
