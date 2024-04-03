import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API12Service {
  private readonly logger = new Logger(API12Service.name);
}
