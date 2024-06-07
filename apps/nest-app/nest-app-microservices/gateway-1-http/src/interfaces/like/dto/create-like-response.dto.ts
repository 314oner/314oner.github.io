import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeResponseDto {
  @ApiProperty({ example: 'like_create_success' })
  message: string;
  @ApiProperty({ example: null, nullable: true })
  data: object;
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
