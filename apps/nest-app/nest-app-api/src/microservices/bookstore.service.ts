import { Injectable } from '@nestjs/common';

@Injectable()
export class BookstoreService {
  getHello(): string {
    return 'Hello World!';
  }
}
