import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
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
}
