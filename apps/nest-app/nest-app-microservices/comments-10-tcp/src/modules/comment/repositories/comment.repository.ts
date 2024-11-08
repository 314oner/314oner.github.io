import { CommentEntity } from '@app/comments/entities/comment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}
  async createComment(commentDto: any) {
    const comment = new CommentEntity();
    comment.text = commentDto.text;
    comment.user = commentDto.user;
    comment.post = commentDto.post;
    comment.dateAndTimePublish = new Date();
    const newComment = await this.commentRepository.save(comment);
    return this.commentRepository.findOne({
      where: { id: newComment.id },
      relations: ['user', 'post'],
    });
  }
}
