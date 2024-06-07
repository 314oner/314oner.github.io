import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ITagCreateResponse } from './interfaces/tag-create-response.interface';
import { TagService } from './tag.service';
@Controller()
export class TagController {
  constructor(private tagService: TagService) {}
  @MessagePattern('tag.create_tag')
  async createTag(userParams: any): Promise<ITagCreateResponse> {
    let result: ITagCreateResponse;
    if (userParams) {
      try {
        const tag = await this.tagService.createTag(userParams);
        result = {
          status: HttpStatus.CREATED,
          message: 'tag_create_success',
          tag,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'tag_create_precondition_failed',
          tag: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'tag_create_bad_request',
        tag: null,
        errors: null,
      };
    }
    return result;
  }
}
