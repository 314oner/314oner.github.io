import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'firstMsg',
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ example: 'lorem ipsum......' })
  @IsNotEmpty()
  readonly text: string;

  @ApiProperty({ example: 'COPY_AND_PASTE_USER_ID' })
  @IsNotEmpty()
  readonly userId: any;

  @ApiProperty()
  @IsOptional()
  readonly tags?: any;
}
