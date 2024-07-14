import { TagEntity } from '@app/tags/entities/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TagRepository {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}
  async createTag(tag: TagEntity): Promise<TagEntity> {
    //const tag = this.tagRepository.create();
    //tag.name = tagDto.name;
    //tag.description = tagDto.description;
    //tag.color = tagDto.color;
    //await this.tagRepository.save(tag);
    //return tag;

    return await this.tagRepository.save({ ...tag });
  }

  async getAll(): Promise<TagEntity[]> {
    return this.tagRepository.find();
  }
}
