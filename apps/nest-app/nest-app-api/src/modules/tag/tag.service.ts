import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from '../../models/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagDto } from './dto/tag.dto';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag, 'database-FR')
    private readonly tagRepository: Repository<Tag>
  ) { }
  async createTag(tagDto: TagDto): Promise<Tag> {
    const tag = new Tag();
    tag.name = tagDto.name;
    tag.description = tagDto.description;
    tag.color = tagDto.color;
    return this.tagRepository.save(tag);
  }

  async deleteTag(tagId: number) {
    await this.tagRepository.delete(tagId);
  }

  async findById(idB: number): Promise<Tag> {
    const user = this.tagRepository.findOneBy({ id: idB });
    if (!user) {
      const errors = { Tag: ' not found' };
      throw new HttpException({ errors }, 404);
    }
    return user;
  }

  async getAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }
}
