import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API1Service } from './api1.service';

@Controller()
export class API1Controller {
  constructor(private readonly userService: API1Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
