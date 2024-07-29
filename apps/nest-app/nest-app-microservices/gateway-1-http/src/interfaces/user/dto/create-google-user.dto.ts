import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateGoogleUserDto {
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
  //@IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    example: 'https://www.gstatic.com/webp/gallery3/2_webp_a.webp',
  })
  @IsNotEmpty()
  readonly googlePhotoUrl: string;
}
