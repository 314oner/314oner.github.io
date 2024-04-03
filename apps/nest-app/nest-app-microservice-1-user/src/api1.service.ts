import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API1Service {
  private readonly logger = new Logger(API1Service.name);
}
