import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Et non mattis bibendum in eget penatibus. Auctor a nunc dapibus facilisis ultricies, mattis platea nam lorem. Sodales hendrerit vel; nostra cubilia posuere nulla. Senectus viverra tristique molestie magna nibh conubia tempus aenean. Primis bibendum aliquet dis dolor euismod bibendum. ',
  })
  @IsString()
  @MinLength(7, { message: 'Minimum length >= 7' })
  readonly text: string;

  @ApiProperty({
    example: 'COPY_AND_PASTE_USER_ID',
  })
  @IsNotEmpty()
  readonly user: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly post: string;
}
