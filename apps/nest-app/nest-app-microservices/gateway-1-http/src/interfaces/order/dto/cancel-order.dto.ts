import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CancelOrderDto {
  @ApiProperty({ required: false, example: 'DECLINED' })
  @IsNotEmpty()
  readonly status: string;
}
