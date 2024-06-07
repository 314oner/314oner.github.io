import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 'dakimakura',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '88007353535' })
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({
    example: 99,
  })
  @IsNotEmpty()
  readonly price: number;
}
