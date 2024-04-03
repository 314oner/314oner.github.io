import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API8Service {
  private readonly logger = new Logger(API8Service.name);
}
