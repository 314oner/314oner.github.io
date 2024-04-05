import { IsNotEmpty, IsString } from 'class-validator';

export class TagDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty()
  readonly name: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly color: string;
}
