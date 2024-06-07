import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostIdDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
