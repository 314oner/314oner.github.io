import { PostInterface } from '@app/posts/modules/post/interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class GetPostsByIdResponseDto {
  @ApiProperty({ example: 'posts_get_by_id_success' })
  message: string;
  @ApiProperty({ example: null, nullable: true })
  data: {
    posts: PostInterface[];
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
