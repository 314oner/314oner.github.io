import { Injectable } from '@nestjs/common';
import { CommentRepository } from './repositories';
const _ = require('lodash');
@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}
  async createComment(likeDto: any) {
    const createdComment = this.commentRepository.createComment(likeDto);
    return createdComment;
  }
}
