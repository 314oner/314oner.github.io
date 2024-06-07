import { PostInterface } from '@app/posts/modules/post/interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostResponseDto {
  @ApiProperty({ example: 'post_create_success' })
  message: string;
  @ApiProperty({ example: null, nullable: true })
  data: {
    post: PostInterface;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
