import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API14Service } from './api14.service';

@Controller()
export class API14Controller {
  constructor(private readonly userService: API14Service) {}
  @MessagePattern({ cmd: 'ping' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
