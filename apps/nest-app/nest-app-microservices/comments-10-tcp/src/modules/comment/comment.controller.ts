import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommentService } from './comment.service';
@Controller()
export class CommentController {
  constructor(private commentService: CommentService) {}
  @MessagePattern('comment.create')
  public async createComment(userParams: any): Promise<any> {
    let result: any;

    if (userParams) {
      try {
        const createdComment =
          await this.commentService.createComment(userParams);
        result = {
          status: HttpStatus.CREATED,
          message: 'comment_create_success',
          comment: createdComment,
          errors: null,
        };
        return result;
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'comment_create_precondition_failed',
          comment: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'comment_create_bad_request',
        comment: null,
        errors: null,
      };
    }

    return result;
  }
}
