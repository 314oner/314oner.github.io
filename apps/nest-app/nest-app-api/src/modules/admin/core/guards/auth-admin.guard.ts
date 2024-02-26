import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { LoginAdminService } from 'src/modules/admin/login/login-admin.service'

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private loginService: LoginAdminService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return false;
  }
}
