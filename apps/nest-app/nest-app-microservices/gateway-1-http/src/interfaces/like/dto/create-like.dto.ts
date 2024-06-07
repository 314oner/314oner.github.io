import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLikeDto {
  @ApiProperty({
    example: 'COPY_AND_PASTE_USER_ID',
  })
  @IsNotEmpty()
  readonly userId: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly postId: string;
}
