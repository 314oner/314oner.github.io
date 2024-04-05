import { Controller, Get, Post, Body } from '@nestjs/common';
import { TagsService } from './tags.service';
import { ApiTags } from '@nestjs/swagger';
//import { Tag } from '@apps/nest-app-shared';
//import { TagDto } from '@apps/nest-app-shared';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  createTag(
    @Body('name') tagName: string,
    @Body('description') tagDescription: string,
    @Body('color') tagColor: string,
  ) {
    return this.tagsService.createTag(tagName, tagDescription, tagColor);
  }

  @Get()
  getAll() {
    return this.tagsService.getAll();
  }
}
