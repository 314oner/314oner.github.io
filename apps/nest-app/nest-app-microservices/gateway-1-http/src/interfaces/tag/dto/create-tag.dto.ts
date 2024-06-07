import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    minLength: 6,
    example: 'travels',
  })
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    minLength: 6,
    example: 'etc',
  })
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    minLength: 6,
    example: 'green',
  })
  @IsNotEmpty()
  color: string;
}
