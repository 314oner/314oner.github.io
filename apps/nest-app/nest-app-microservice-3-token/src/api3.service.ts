import { Injectable, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class API3Service {
  private readonly logger = new Logger(API3Service.name);
  handleNewUser(data: any) {
    this.logger.debug('This is the event sent by client (API3Service)')
    console.log(data)
  }
}
