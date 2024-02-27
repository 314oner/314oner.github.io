import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class PageOptionsDto {
  @ApiProperty({
    description: 'Текущая страница содержит количество элементов на странице',
    required: false,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly pageSize: number = 10;

  @ApiProperty({
    description: 'Текущая страница содержит количество страниц',
    required: false,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly pageNumber: number = 1;
}
