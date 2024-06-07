import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { TAGS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs';
import { CreateTagResponseDto } from './interfaces/tag/dto/create-tag-response.dto';
import { CreateTagDto } from './interfaces/tag/dto/create-tag.dto';
import { IServiceTagCreateResponse } from './interfaces/tag/service-tag-create-response.interface';

@ApiTags('tags')
@Controller({
  path: 'tags',
  version: '1',
})
export class TagsController {
  constructor(
    @Inject(TAGS_SERVICE_TOKEN) private readonly tagServiceClient: ClientProxy,
  ) {}

  @Post()
  //@Authorization(true)
  async createTag(
    @Body() userRequest: CreateTagDto,
  ): Promise<CreateTagResponseDto> {
    const createTagResponse: IServiceTagCreateResponse = await firstValueFrom(
      this.tagServiceClient.send('tag.create_tag', userRequest),
    );
    if (createTagResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createTagResponse.message,
          data: null,
          errors: createTagResponse.errors,
        },
        createTagResponse.status,
      );
    }

    return {
      message: createTagResponse.message,
      data: {
        tag: createTagResponse.tag,
      },
      //@ts-ignore
      errors: null,
    };
  }
}
