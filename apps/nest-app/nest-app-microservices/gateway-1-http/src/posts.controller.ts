import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { POSTS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { CreatePostResponseDto } from './interfaces/post/dto/create-post-response.dto';
import { CreatePostDto } from './interfaces/post/dto/create-post.dto';
import { GetTopPostsResponseDto } from './interfaces/post/dto/get-best-posts-response.dto';
import { GetHotPostsResponseDto } from './interfaces/post/dto/get-hot-posts-response.dto';
import { GetLatestPostsResponseDto } from './interfaces/post/dto/get-latest-posts-response.dto';
import { GetPostsByIdResponseDto } from './interfaces/post/dto/get-posts-by-id-response.dto';
import { PostIdDto } from './interfaces/post/dto/post-id.dto';
import { IServicePostCreateResponse } from './interfaces/post/service-post-create-response.interface';

@ApiBearerAuth('authorization')
@ApiTags('posts')
@Controller({
  path: 'posts',
  version: '1',
})
export class PostsController {
  constructor(
    @Inject(POSTS_SERVICE_TOKEN)
    private readonly postsServiceClient: ClientProxy,
  ) {}
  @Post()
  //@Authorization(true)
  @ApiCreatedResponse({
    type: CreatePostResponseDto,
  })
  public async createPost(
    @Body() userRequest: CreatePostDto,
  ): Promise<CreatePostResponseDto> {
    const createPostResponse: IServicePostCreateResponse = await firstValueFrom(
      this.postsServiceClient.send('post.create', userRequest),
    );
    if (createPostResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createPostResponse.message,
          data: null,
          errors: createPostResponse.errors,
        },
        createPostResponse.status,
      );
    }
    return {
      message: createPostResponse.message,
      data: {
        post: createPostResponse.post,
      },
      //@ts-ignore
      errors: null,
    };
  }

  @Get('/latest')
  //@Authorization(true)
  public async getLatestPosts(): Promise<GetLatestPostsResponseDto> {
    const postResponse: any = await firstValueFrom(
      this.postsServiceClient.send('post.get_latests_posts', {}),
    );

    return {
      message: postResponse.message,
      data: {
        posts: postResponse.posts,
      },
      //@ts-ignore
      errors: null,
    };
  }

  @Get('/hot')
  //@Authorization(true)
  public async getHotPosts(): Promise<GetHotPostsResponseDto> {
    const postResponse: any = await firstValueFrom(
      this.postsServiceClient.send('post.get_hot_posts', {}),
    );

    return {
      message: postResponse.message,
      data: {
        posts: postResponse.posts,
      },
      //@ts-ignore
      errors: null,
    };
  }

  @Get('/best')
  //@Authorization(true)
  public async getTopPosts(): Promise<GetTopPostsResponseDto> {
    const postResponse: any = await firstValueFrom(
      this.postsServiceClient.send('post.get_best_posts', {}),
    );

    return {
      message: postResponse.message,
      data: {
        posts: postResponse.posts,
      },
      //@ts-ignore
      errors: null,
    };
  }

  @Get(':id')
  //@Authorization(true)
  public async getPostsByUserId(
    @Param() params: PostIdDto,
  ): Promise<GetPostsByIdResponseDto> {
    const postsResponse: any = await firstValueFrom(
      this.postsServiceClient.send('post.get_posts_by_user_id', {
        id: params.id,
      }),
    );
    return {
      message: postsResponse.message,
      data: {
        posts: postsResponse.posts,
      },
      //@ts-ignore
      errors: null,
    };
  }
}
