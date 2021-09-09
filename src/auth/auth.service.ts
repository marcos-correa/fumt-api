import { Injectable } from '@nestjs/common';
import { User } from '../users/shared/user';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {
 
  constructor(
    private usersService:UsersService
  ){}

  async validateUser(username:string,password:string){
    const user = await this.usersService.getUserByUsername(username)
    if(user && user.password == password){
      const {_id, name, profesor, logged, username} = user;
      return {id: _id, name,username, profesor, logged}
    }
    return null;
  }

}
