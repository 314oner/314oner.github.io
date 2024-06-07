import { TagInterface } from '@app/tags/modules/tag/interfaces';

export interface IServiceTagCreateResponse {
  status: number;
  message: string;
  tag: TagInterface;
  errors: { [key: string]: any };
}
