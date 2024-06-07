import { PostInterface } from '@app/posts/modules/post/interfaces';

export interface IServicePostCreateResponse {
  status: number;
  message: string;
  post: PostInterface;
  errors: { [key: string]: any };
}
