import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API3Service } from './api3.service';

@Controller()
export class API3Controller {
  constructor(private readonly userService: API3Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }

  @EventPattern('new_user')
  handleNewUser(data: any) {
    return this.userService.handleNewUser(data);
  }
}
