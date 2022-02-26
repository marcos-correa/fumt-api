import { BookService } from './book.service';
import { BookController } from './book.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [
    BookController,],
  providers: [
    BookService,],
})
export class BookModule { }
