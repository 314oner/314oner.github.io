import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@ApiTags('Comment')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) { }
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() commentDto: CommentDto) {
    return this.commentService.createComment(commentDto)
  }
}
