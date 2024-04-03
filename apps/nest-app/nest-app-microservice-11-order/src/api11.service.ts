import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API11Service {
  private readonly logger = new Logger(API11Service.name);
}
