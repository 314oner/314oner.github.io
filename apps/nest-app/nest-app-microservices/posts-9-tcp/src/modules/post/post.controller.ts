import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostInterface } from './interfaces';
import { IPostCreateResponse } from './interfaces/post-create-response.interface';
import { PostService } from './post.service';
@Controller()
export class PostController {
  constructor(private postService: PostService) {}
  @MessagePattern('post.create')
  public async createPost(
    postBody: PostInterface,
  ): Promise<IPostCreateResponse> {
    let result: IPostCreateResponse;
    if (postBody) {
      try {
        const post = await this.postService.createPost(postBody);
        result = {
          status: HttpStatus.CREATED,
          message: 'post_create_success',
          post,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'post_create_precondition_failed',
          post: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'post_create_bad_request',
        post: null,
        errors: null,
      };
    }

    return result;
  }

  @MessagePattern('post.get_latests_posts')
  public async getLatestPosts(): Promise<any> {
    let result: any;
    try {
      const posts = await this.postService.getLatestPosts();
      if (posts) {
        result = {
          status: HttpStatus.OK,
          message: 'get_latest_posts_success',
          posts,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_latest_posts_not_found',
          posts: null,
        };
      }
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_latest_posts_bad_request',
        posts: null,
        errors: e.errors,
      };
    }
    return result;
  }

  @MessagePattern('post.get_hot_posts')
  public async getHotPosts(): Promise<any> {
    let result: any;
    try {
      const posts = await this.postService.getHotPosts();
      if (posts) {
        result = {
          status: HttpStatus.OK,
          message: 'get_hot_posts_success',
          posts,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_hot_posts_not_found',
          posts: null,
        };
      }
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_hot_posts_bad_request',
        posts: null,
        errors: e.errors,
      };
    }
    return result;
  }

  @MessagePattern('post.get_best_posts')
  public async getTopPosts(): Promise<any> {
    let result: any;
    try {
      const posts = await this.postService.getTopPosts();
      if (posts) {
        result = {
          status: HttpStatus.OK,
          message: 'get_best_posts_success',
          posts,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_best_posts_not_found',
          posts: null,
        };
      }
    } catch (e) {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_best_posts_bad_request',
        posts: null,
        errors: e.errors,
      };
    }
    return result;
  }

  @MessagePattern('post.get_posts_by_user_id')
  public async getPostsByUserId(params: { id: string }): Promise<any> {
    let result: any;

    if (params.id) {
      const posts = await this.postService.getPostsByUserId(params);
      if (posts) {
        result = {
          status: HttpStatus.OK,
          message: 'get_posts_by_user_id_success',
          posts,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'get_posts_by_user_id_not_found',
          posts: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'get_posts_by_user_id_bad_request',
        posts: null,
      };
    }

    return result;
  }
}
