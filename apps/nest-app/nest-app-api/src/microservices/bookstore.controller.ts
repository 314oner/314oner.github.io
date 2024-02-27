import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { BookDTO } from '../microservices/dto/book';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api2/booksstore')
export class BookstoreController {
  constructor(@Inject('BOOKS_SERVICE') private client: ClientProxy) {}

  @Get()
  getAllBooks() {
    return this.client.send({ cmd: 'get_books' }, {});
  }

  @Get(':id')
  getBookByID(@Param('id') id) {
    return this.client.send({ cmd: 'get_book' }, id);
  }

  @Post()
  createNewBook(@Body() book: BookDTO) {
    return this.client.emit({ cmd: 'new_book' }, book);
  }
}
