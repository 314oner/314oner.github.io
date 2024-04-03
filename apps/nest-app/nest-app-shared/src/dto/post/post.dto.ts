import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class PostDto {
  @MinLength(3, { message: 'Оглавление слишком короткое!' })
  @MaxLength(80, { message: 'Оглавление слишком длинное!' })
  @IsString({ message: 'Оглавленние должно быть строкой' })
  title: string;

  @MinLength(3, { message: 'Текст слишком короткий!' })
  @MaxLength(1280, { message: 'Текст слишком длинный!' })
  @IsString({ message: 'Текс должен быть строкой' })
  text: string;

  @IsNotEmpty()
  userId: number;

  tags?: string[];
}
