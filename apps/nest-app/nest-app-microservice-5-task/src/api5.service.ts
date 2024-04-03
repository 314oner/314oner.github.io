import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API5Service {
  private readonly logger = new Logger(API5Service.name);
}
