import { UsersService } from './users.service';
import { User } from './shared/user';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';


@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ){}

  @Get()
  async getAllUsers(): Promise<User[]>{
    return this.usersService.getAllUsers();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User>{
    return await this.usersService.createUser(user)
  }


 }
