import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API9Service {
  private readonly logger = new Logger(API9Service.name);
}
