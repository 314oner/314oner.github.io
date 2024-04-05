import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { TagService } from './tag.service';

//import { Tag } from '@apps/nest-app-shared';
import { TagDto } from '@apps/nest-app-shared';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @MessagePattern({ cmd: 'create_tag' })
  create(tagDto: TagDto) {
    return this.tagService.createTag(tagDto);
  }

  @MessagePattern({ cmd: 'all_tags' })
  all() {
    return this.tagService.getAll();
  }
}
