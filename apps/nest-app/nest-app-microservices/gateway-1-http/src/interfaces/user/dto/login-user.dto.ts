import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'user@314oner.com' })
  @IsNotEmpty()
  email: string;
  @ApiProperty({ example: 'user322' })
  @IsNotEmpty()
  password: string;
}
