import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API6Service {
  private readonly logger = new Logger(API6Service.name);
}
