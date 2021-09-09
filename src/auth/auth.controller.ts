import { Controller, UseGuards, Request, Get, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';


@Controller('auth')
export class AuthController {

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req:any){
    // user que retorna do LocalStrategy.validate
    return req.user;
  }
}
