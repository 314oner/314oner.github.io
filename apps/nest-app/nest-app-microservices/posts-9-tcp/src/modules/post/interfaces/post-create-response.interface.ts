import { PostInterface } from './post.interface';

export interface IPostCreateResponse {
  status: number;
  message: string;
  post: PostInterface | null;
  errors: { [key: string]: any } | null;
}
