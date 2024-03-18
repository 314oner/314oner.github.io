import { Injectable, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class API4Service {
  private readonly logger = new Logger(API4Service.name);
  handleNewUser(data: any) {
    this.logger.debug('This is the event sent by client (API4Service)')
    console.log(data)
  }
}
