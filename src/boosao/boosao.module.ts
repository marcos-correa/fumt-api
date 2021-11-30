import { BoosaoService } from './boosao.service';
import { BoosaoController } from './boosao.controller';
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
    BoosaoController,],
  providers: [
    BoosaoService,],
})
export class BoosaoModule { }
