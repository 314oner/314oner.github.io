import { Controller, Get } from '@nestjs/common';
import { AppService2 } from './api2.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { from, of } from 'rxjs';
import { delay as rxDelay } from 'rxjs/operators';
import { BookDTO } from './book';

function delay(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

@Controller()
export class AppController2 {
  constructor(private readonly appService: AppService2) {}
  @MessagePattern({ cmd: 'new_book' })
  newBook(book: BookDTO): BookDTO | boolean | string {
    delay(10000);
    const result = this.appService.newBook(book);
    if (!result) {
      return 'Book already exists';
    } else {
      return result;
    }
  }
  @MessagePattern({ cmd: 'get_book' })
  getBook(bookID: string): BookDTO {
    return this.appService.getBookByID(bookID);
  }
  @MessagePattern({ cmd: 'get_books' })
  getBooks(): BookDTO[] {
    return this.appService.getAllBooks();
  }
  ////////////////////////////////////////
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return from('pong').pipe(rxDelay(2000));
    /*
      .pipe(rxDelay(20000));
      ||
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
      */
  }
  //TODO: kafka pods.. please stand by...
  @EventPattern('user_created')
  async handleUserCreated(data: any): Promise<void> {
    console.log('Microservice - handleUserCreated', { data });
  }
}
