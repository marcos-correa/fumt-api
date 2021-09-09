import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExamsModule } from './exams/exams.module';


@Module({
  imports: [
    AnswersModule,
    UsersModule,
    AuthModule,
    ExamsModule,
    MongooseModule.forRoot('mongodb+srv://db_user:QRZw83nhnTnQQ0VX@cluster0.enw1i.mongodb.net/fumt?retryWrites=true&w=majority')
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
