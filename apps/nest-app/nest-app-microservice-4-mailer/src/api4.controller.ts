import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API4Service } from './api4.service';

@Controller()
export class API4Controller {
  constructor(private readonly userService: API4Service) {}
  @MessagePattern({ cmd: 'ping' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
