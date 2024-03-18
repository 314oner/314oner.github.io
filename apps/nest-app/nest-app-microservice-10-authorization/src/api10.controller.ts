import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { API10Service } from './api10.service';

@Controller()
export class API10Controller {
  constructor(private readonly userService: API10Service) { }
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }

  @EventPattern('new_user')
  handleNewUser(data: any) {
    return this.userService.handleNewUser(data);
  }
}
