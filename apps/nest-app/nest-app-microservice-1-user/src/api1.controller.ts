import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API1Service } from './api1.service';

@Controller()
export class API1Controller {
  constructor(private readonly userService: API1Service) {}
  @MessagePattern({ cmd: 'ping' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
