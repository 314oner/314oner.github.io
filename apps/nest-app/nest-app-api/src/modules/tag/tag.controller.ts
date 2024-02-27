import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';
import { Tag } from '../../models/tag.entity';
import { TagDto } from './dto/tag.dto';

@ApiTags('Tag')
@Controller('tags')
export class TagController {
  constructor(
    private readonly tagService: TagService //@Inject(Logger) private readonly logger: LoggerService
  ) { }
  //@UseGuards(AuthGuard)
  @Post()
  create(@Body() tagDto: TagDto) {
    return this.tagService.createTag(tagDto);
  }

  //@UseGuards(AuthGuard)
  @Delete('tag/:id')
  async delete(@Param('id') id: number) {
    await this.tagService.deleteTag(id);
  }

  @Get('tag/:id')
  async getTagById(@Param('id') id: number): Promise<Tag> {
    return await this.tagService.findById(id);
  }

  @Get()
  getAllTags() {
    return this.tagService.getAll();
  }
}
