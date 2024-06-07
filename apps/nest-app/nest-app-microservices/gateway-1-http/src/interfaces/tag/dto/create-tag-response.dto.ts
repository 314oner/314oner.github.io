import { TagInterface } from '@app/tags/modules/tag/interfaces';

export class CreateTagResponseDto {
  message: string;
  data: {
    tag: TagInterface;
  };
  errors: { [key: string]: any };
}
