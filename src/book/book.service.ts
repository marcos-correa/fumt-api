import { Observable } from 'rxjs';
// import { Vehicle } from './shared/vehicle';
/*
https://docs.nestjs.com/providers#services
*/

import { HttpService, } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse} from 'axios';

@Injectable()
export class BookService {

  constructor(
    // @InjectModel('Answer') private readonly answerModel: Model<Answer>,
    private httpService: HttpService
  ) { }


  async getHello(): Promise<any>{
    const response = await this.httpService.get("http://publishing-house-service.herokuapp.com/").toPromise()
    return response.data
    // return resposta.data;
  }
  
  // async getVan(): Promise<AxiosResponse>{
  //   const response = await this.httpService.get("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l").toPromise()
  //   return response.data
  // }

  // async getVan(){
  //   return await 
  // }

  // async getItinerary(id){
  //   const response = await this.httpService.get("http://www.poatransporte.com.br/php/facades/process.php?a=il&p="+id).toPromise()
  //   return response.data 
  // }
}
