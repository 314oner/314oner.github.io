import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    uniqueItems: true,
    example: 'user@314oner.com',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ uniqueItems: true, example: 'user' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    minLength: 6,
    example: 'user322',
  })
  @IsNotEmpty()
  readonly password: string;
}
