import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API5Service } from './api5.service';

@Controller()
export class API5Controller {
  constructor(private readonly orderService: API5Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
