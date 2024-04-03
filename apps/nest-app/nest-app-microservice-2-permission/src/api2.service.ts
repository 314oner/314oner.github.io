import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API2Service {
  private readonly logger = new Logger(API2Service.name);
}
