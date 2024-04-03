import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdatePostDto {
  @MinLength(3, { message: 'Оглавление слишком короткое!' })
  @MaxLength(80, { message: 'Оглавление слишком длинное!' })
  @IsString({ message: 'Title must be string' })
  title: string;

  @MinLength(3, { message: 'Текст слишком короткий!' })
  @MaxLength(1280, { message: 'Текст слишком длинный!' })
  @IsString({ message: 'Title must be string' })
  text: string;

  @IsNotEmpty({ message: 'Пустой идентификатор' })
  postId: number;

  @IsNotEmpty({ message: 'Нет изображения' })
  postImage: string;

  tags?: string[];
}
