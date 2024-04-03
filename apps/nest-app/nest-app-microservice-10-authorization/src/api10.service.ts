import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class API10Service {
  private readonly logger = new Logger(API10Service.name);
}
