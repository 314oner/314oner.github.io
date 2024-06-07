import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrderIdDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
