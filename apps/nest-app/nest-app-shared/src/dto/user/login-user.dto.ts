import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
