import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API4Service } from './api4.service';

@Controller()
export class API4Controller {
  constructor(private readonly userService: API4Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }

  @EventPattern('new_user')
  handleNewUser(data: any) {
    return this.userService.handleNewUser(data);
  }
}
