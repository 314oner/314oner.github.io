import { TagInterface } from './tag.interface';

export interface ITagCreateResponse {
  status: number;
  message: string;
  tag: TagInterface | null;
  errors: { [key: string]: any } | null;
}
