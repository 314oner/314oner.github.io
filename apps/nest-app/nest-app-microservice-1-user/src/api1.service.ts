import { Injectable, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class API1Service {
  private readonly logger = new Logger(API1Service.name);
  handleNewUser(data: any) {
    this.logger.debug('This is the event sent by client (API1Service)')
    console.log(data)
  }
}
