import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from '../../models/like.entity';
import { LikeDto } from './dto/like.dto';
@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like, 'database-FR')
    private readonly likeRepository: Repository<Like>
  ) { }
  async likePost(likeDto: LikeDto) {
    const like = new Like();
    like.user = likeDto.userId;
    like.post = likeDto.postId;
    const newLike = await this.likeRepository.save(like);
    return await this.likeRepository.findOne({
      where: { id: newLike.id },
      relations: ['post'],
    });
  }
}
