import { Module } from '@nestjs/common'
import { APP_GUARD, RouterModule } from '@nestjs/core'
import { SystemModule } from './system/system.module'
import { ADMIN_PREFIX } from './admin.constants'
import { LoginAdminModule } from './login/login-admin.module'
import { AuthAdminGuard } from './core/guards/auth-admin.guard'


@Module({
  imports: [
    RouterModule.register([
      {
        path: ADMIN_PREFIX,
        children: [{ path: 'sys', module: SystemModule }]
      },
      {
        path: ADMIN_PREFIX,
        module: LoginAdminModule
      }
    ]),
    LoginAdminModule,
    SystemModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthAdminGuard
    }
  ],
  exports: [SystemModule]
})
export class AdminModule {}
