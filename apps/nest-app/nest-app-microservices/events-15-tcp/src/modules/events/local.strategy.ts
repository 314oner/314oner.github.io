import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { AUTH_SERVICE_TOKEN } from '@shared/common/tokens';
import { Strategy } from 'passport-local';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly authService: ClientProxy,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const payload = { username: username, password: password };
    const userResponse = await firstValueFrom(
      this.authService.send('validate', payload),
    );
    Logger.log({ userResponse });
    return userResponse;
  }
}
