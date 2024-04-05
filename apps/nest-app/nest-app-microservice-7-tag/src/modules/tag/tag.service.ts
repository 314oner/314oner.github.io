import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '@apps/nest-app-shared';
import { TagDto } from '@apps/nest-app-shared';

const logger = new Logger();

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag, 'database-S7')
    private tagRepository: Repository<Tag>,
  ) {}

  async createTag(tagDto: TagDto) {
    const tag = this.tagRepository.create();
    tag.name = tagDto.name;
    tag.description = tagDto.description;
    tag.color = tagDto.color;
    await this.tagRepository.save(tag);
    logger.log('New tag created. The tagId: ' + tag.id);
    return tag;
  }

  async getAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }
}
