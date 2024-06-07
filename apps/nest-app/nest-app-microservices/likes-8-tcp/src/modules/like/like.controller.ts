import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LikeService } from './like.service';
@Controller()
export class LikeController {
  constructor(private likeService: LikeService) {}
  @MessagePattern('like.positive')
  public async likePost(userParams: any): Promise<any> {
    let result: any;

    if (userParams) {
      try {
        const likedPost = await this.likeService.likePost(userParams);
        result = {
          status: HttpStatus.CREATED,
          message: 'like_positive_success',
          user: likedPost,
          errors: null,
        };
        return result;
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'like_positive_precondition_failed',
          user: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'like_positive_bad_request',
        user: null,
        errors: null,
      };
    }

    return result;
  }
}
