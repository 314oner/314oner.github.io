import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { COMMENTS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { CreateCommentResponseDto } from './interfaces/comment/dto/create-comment-response.dto';
import { CreateCommentDto } from './interfaces/comment/dto/create-comment.dto';
import { IServiceCommentCreateResponse } from './interfaces/comment/service-comment-create-response.interface';

@ApiTags('comments')
@Controller({
  path: 'comments',
  version: '1',
})
export class CommentsController {
  constructor(
    @Inject(COMMENTS_SERVICE_TOKEN)
    private readonly likesServiceClient: ClientProxy,
  ) {}
  @Post()
  public async createComment(
    @Body() userRequest: CreateCommentDto,
  ): Promise<CreateCommentResponseDto> {
    const createCommentResponse: IServiceCommentCreateResponse =
      await firstValueFrom(
        this.likesServiceClient.send('comment.create', userRequest),
      );
    if (createCommentResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createCommentResponse.message,
          data: null,
          errors: createCommentResponse.errors,
        },
        createCommentResponse.status,
      );
    }
    return {
      message: createCommentResponse.message,
      data: {
        comment: createCommentResponse.comment,
      },
      //@ts-ignore
      errors: null,
    };
  }
}
