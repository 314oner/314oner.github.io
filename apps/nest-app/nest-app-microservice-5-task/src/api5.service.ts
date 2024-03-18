import { Injectable, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class API5Service {
  private readonly logger = new Logger(API5Service.name);
  handleNewUser(data: any) {
    this.logger.debug('This is the event sent by client (API5Service)')
    console.log(data)
  }
}
