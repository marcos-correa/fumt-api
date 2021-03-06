import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Itinerary } from './shared/itinerary';
import { Vehicle } from './shared/vehicle';
import { BoosaoService } from './boosao.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';

@Controller('boosao')
export class BoosaoController {
  constructor(
    private boosaoService:BoosaoService,
  ){

  }

  @Get('/bus')
  async getBus(){
    return await this.boosaoService.getBus()
  }
  
  @Get('/van')
  async getVan(){
    return await this.boosaoService.getVan()
  }
  
  @Get('/iti/:id')
  async getUnansweredExamsByStudentId(@Param('id') id: string): Promise<Itinerary[]>{
    return this.boosaoService.getItinerary(id)
  }

}