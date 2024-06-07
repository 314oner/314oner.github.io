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
import { LIKE_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { CreateLikeResponseDto } from './interfaces/like/dto/create-like-response.dto';
import { CreateLikeDto } from './interfaces/like/dto/create-like.dto';
import { IServiceLikeCreateResponse } from './interfaces/like/service-like-create-response.interface';

@ApiTags('likes')
@Controller({
  path: 'likes',
  version: '1',
})
export class LikesController {
  constructor(
    @Inject(LIKE_SERVICE_TOKEN)
    private readonly likesServiceClient: ClientProxy,
  ) {}
  @Post()
  public async createLike(
    @Body() userRequest: CreateLikeDto,
  ): Promise<CreateLikeResponseDto> {
    const createUserResponse: IServiceLikeCreateResponse = await firstValueFrom(
      this.likesServiceClient.send('like.positive', userRequest),
    );
    if (createUserResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status,
      );
    }
    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user,
        token: '',
      },
      //@ts-ignore
      errors: null,
    };
  }
}
