import { BoosaoModule } from './boosao/boosao.module';
import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExamsModule } from './exams/exams.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    BoosaoModule,
    AnswersModule,
    UsersModule,
    AuthModule,
    ExamsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL)
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
