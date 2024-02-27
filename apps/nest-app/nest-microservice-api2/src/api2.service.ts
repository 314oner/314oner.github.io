import { Injectable } from '@nestjs/common';
import { BookDTO } from './book';

let bookStore: BookDTO[] = [];

@Injectable()
export class AppService2 {
  getBookByID(bookID): BookDTO {
    //@ts-ignore
    return bookStore.find((predicate: BookDTO) => predicate.id == bookID);
    /*
    return {
      id: 'default',
      title: 'default',
      author: 'default',
      release_date: new Date(),
    };
    */
  }
  getAllBooks(): BookDTO[] {
    return bookStore;
  }
  newBook(book): BookDTO | boolean {
    const exists = bookStore.find((predicate: BookDTO) => {
      return (
        predicate.title == book.title &&
        predicate.author == book.author &&
        predicate.release_date
      );
    });
    if (exists) return false;
    book.id = 'Book_' + (bookStore.length + 1);
    bookStore.push(book);
    return book.id;
    /*
    return {
      id: 'default',
      title: 'default',
      author: 'default',
      release_date: new Date(),
    };
    */
  }
}
