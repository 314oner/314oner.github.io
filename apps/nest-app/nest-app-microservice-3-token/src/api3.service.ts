import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API3Service {
  private readonly logger = new Logger(API3Service.name);
}
