import { Controller, Get } from '@nestjs/common';
import { Api5Service } from 'api5.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class Api5Controller {
  constructor(private readonly appService: Api5Service) {}

  @Get('/ping-api2')
  pingServiceA() {
    return this.appService.pingService2();
  }

  @Get('/ping-api4')
  pingServiceB() {
    return this.appService.pingService4();
  }

  @Get('/ping-all')
  pingAll() {
    return zip(
      this.appService.pingService2(),
      this.appService.pingService4()
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB,
      }))
    );
  }
}
