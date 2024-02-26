import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentDto } from './dto/comment.dto';
import { Comment } from '../../models/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment, 'database-FR')
    private readonly commentRepository: Repository<Comment>
  ) { }
  async createComment(commentDto: CommentDto): Promise<Comment> {
    const comment = new Comment();
    comment.text = commentDto.text;
    comment.user = commentDto.userId;
    comment.post = commentDto.postId;
    comment.dateAndTimePublish = new Date();
    const newComment = await this.commentRepository.save(comment);
    return this.commentRepository.findOne(
      {
        where: { id: newComment.id },
        relations: ['user', 'post'],
      }
    );
  }
}
