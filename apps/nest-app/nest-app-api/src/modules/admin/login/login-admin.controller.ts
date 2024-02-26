import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class LoginAdminController {
}
