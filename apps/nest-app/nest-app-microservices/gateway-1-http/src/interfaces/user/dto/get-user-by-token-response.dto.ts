import { UserInterface } from '@app/users/modules/user/interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserByTokenResponseDto {
  @ApiProperty({ example: 'user_get_by_id_success' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        email: 'user@314oner.com',
        is_confirmed: true,
        id: '761e743b-8caf-4f40-97ed-ee32f930a270',
      },
    },
    nullable: true,
  })
  data: {
    user: UserInterface | null;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
