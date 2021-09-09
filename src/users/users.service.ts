import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './shared/user';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>
  ){  }

  async getAllUsers(){
    return await this.userModel.find().exec();
  }
 
  
  async getUserById(id:string){
    return await this.userModel.findById(id).exec();
  }

  async getUserByUsername(username:string){
    return await this.userModel.findOne({username: username}).exec();
  }

  async createUser(user: User){
    const createdUser = new this.userModel(user)
    return await createdUser.save()
  }
}
