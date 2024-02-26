import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LikeService } from './like.service';
import { LikeDto } from './dto/like.dto';

@ApiTags('Like')
@Controller('likes')
export class LikeController {
  constructor(
    private readonly likeService: LikeService
  ) { }
  @Post()
  async likePost(@Body() likeDto: LikeDto) {
    return await this.likeService.likePost(likeDto)
  }
}
