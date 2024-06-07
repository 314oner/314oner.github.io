import { PostInterface } from '@app/posts/modules/post/interfaces';

export class GetHotPostsResponseDto {
  message: string;
  data: {
    posts: PostInterface[];
  };
  errors: { [key: string]: any };
}
