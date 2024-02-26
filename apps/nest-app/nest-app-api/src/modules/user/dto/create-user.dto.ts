import { UserRole } from '../../../models/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  readonly email: string;

  @MinLength(6, { message: 'password > 6' })
  @MaxLength(20, { message: 'password < 20' })
  @IsString()
  readonly password: string;

  @IsString()
  readonly role: UserRole.USER
}
