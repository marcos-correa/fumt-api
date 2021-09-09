import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'User', schema:UserSchema}])
  ],
  controllers: [
    UsersController
  ],
  providers: [
    UsersService
  ],
  exports:[
    UsersService
  ]
})
export class UsersModule { }
