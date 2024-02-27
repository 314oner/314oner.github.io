import { Module } from '@nestjs/common';
import { TokenModule } from '../token/token.module';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';
import { AuthorizationModule } from '../authorization/authorization.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, TokenModule, AuthorizationModule],
  providers: [SecurityService],
  controllers: [SecurityController],
})
export class SecurityModule {}
