import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API2Service } from './api2.service';

@Controller()
export class API2Controller {
  constructor(private readonly userService: API2Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }

  @EventPattern('new_user')
  handleNewUser(data: any) {
    return this.userService.handleNewUser(data);
  }
}
