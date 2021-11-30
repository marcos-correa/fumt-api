import { Observable } from 'rxjs';
import { Vehicle } from './shared/vehicle';
/*
https://docs.nestjs.com/providers#services
*/

import { HttpService, } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse} from 'axios';

@Injectable()
export class BoosaoService {

  constructor(
    // @InjectModel('Answer') private readonly answerModel: Model<Answer>,
    private httpService: HttpService
  ) { }


  async getBus(): Promise<AxiosResponse>{
    const response = await this.httpService.get("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o").toPromise()
    return response.data
  }
  
  // async getBus(){
  //   return 'esponse.data'
  //   // const response = await this.httpService.get("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o").toPromise()
  // }

  // async getVan(){
  //   return await 
  // }

  // async getItinerary(id){
  //   return await 
  // }
}
