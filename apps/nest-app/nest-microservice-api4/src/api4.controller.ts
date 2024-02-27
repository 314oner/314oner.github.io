import { Controller } from '@nestjs/common';
import { Api4Service } from './api4.service';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Controller()
export class Api4Controller {
  constructor(private readonly appService: Api4Service) {}
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }
}
