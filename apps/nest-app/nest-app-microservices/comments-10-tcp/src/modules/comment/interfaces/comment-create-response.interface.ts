import { CommentInterface } from './comment.interface';

export interface ICommentCreateResponse {
  status: number;
  message: string;
  comment: CommentInterface | null;
  errors: { [key: string]: any } | null;
}
