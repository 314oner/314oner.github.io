import { Injectable } from '@nestjs/common';
import { TagEntity } from './enitities/tag.entity';
import { TagRepository } from './repositories/tag.repository';
@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}
  public async createTag(tag: TagEntity): Promise<TagEntity> {
    return await this.tagRepository.createTag(tag);
  }
}
