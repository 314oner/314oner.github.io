import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CommentDto {
  @IsString()
  @MinLength(7, { message: 'Minimum length >= 7' })
  readonly text: string;

  @IsNotEmpty()
  @IsNumber()
  readonly postId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;
}
