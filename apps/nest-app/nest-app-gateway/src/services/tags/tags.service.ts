import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { Tag } from '@apps/nest-app-shared';
//import { TagDto } from '@apps/nest-app-shared';

@Injectable()
export class TagsService {
  constructor(
    @Inject('SERVICE_TAG') private readonly clientTagApp: ClientProxy,
  ) {}
  //POST parameter from API
  async createTag(
    tagName: string = 'travel',
    tagDescription: string = 'lorem ipsum',
    tagColor: string = 'green',
  ): Promise<Tag> {
    const pattern = { cmd: 'create_tag' };
    const payload = {
      name: tagName,
      description: tagDescription,
      color: tagColor,
    };
    return this.clientTagApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  //GET without parameter from API
  async getAll() {
    const pattern = { cmd: 'all_tags' };
    const payload = {};
    return this.clientTagApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
