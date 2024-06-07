import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE_TOKEN, USERS_SERVICE_TOKEN } from '@shared/common/tokens';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(AUTH_SERVICE_TOKEN)
    private readonly tokenServiceClient: ClientProxy,
    @Inject(USERS_SERVICE_TOKEN)
    private readonly userServiceClient: ClientProxy,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const secured = this.reflector.get<string[]>(
      'secured',
      context.getHandler(),
    );

    if (!secured) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    if (!request.headers.authorization) {
      return false;
    }

    const userTokenInfo = await firstValueFrom(
      this.tokenServiceClient.send('token_decode', {
        token: request.headers.authorization.split(' ')[1],
      }),
    );

    if (!userTokenInfo || !userTokenInfo.data) {
      throw new HttpException(
        {
          message: userTokenInfo.message,
          data: null,
          errors: null,
        },
        userTokenInfo.status,
      );
    }

    const userInfo = await firstValueFrom(
      this.userServiceClient.send('user_get_by_id', userTokenInfo.data.userId),
    );

    request.user = userInfo.user;
    return true;
  }
}
