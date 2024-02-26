import { Module } from '@nestjs/common'
import { SystemModule } from '../system/system.module'
import { LoginAdminService } from './login-admin.service'
import { LoginAdminController } from './login-admin.controller'

import { UtilService } from '../../../common/utils/utils.service'

@Module({
  imports: [SystemModule],
  controllers: [LoginAdminController],
  providers: [LoginAdminService, UtilService],
  exports: [LoginAdminService]
})
export class LoginAdminModule { }
