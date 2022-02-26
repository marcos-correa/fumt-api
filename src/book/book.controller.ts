import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Itinerary } from './shared/itinerary';
import { Vehicle } from './shared/vehicle';
import { BookService } from './book.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';

@Controller('book')
export class BookController {
  constructor(
    private bookService:BookService,
  ){

  }

  @Get('/')
  async getHello(){
    return await this.bookService.getHello()
  }
  
  // @Get('/van')
  // async getVan(){
  //   return await this.bookService.getVan()
  // }
  
  // @Get('/iti/:id')
  // async getUnansweredExamsByStudentId(@Param('id') id: string): Promise<Itinerary[]>{
  //   return this.bookService.getItinerary(id)
  // }

}