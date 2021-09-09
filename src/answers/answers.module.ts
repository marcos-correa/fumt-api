import { ExamsModule } from './../exams/exams.module';
import { AnswerSchema } from './schemas/answer.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{name:'Answer',schema:AnswerSchema}]),
  ],
  controllers: [
    AnswersController,
  ],
  providers: [
    AnswersService,
  ],
})
export class AnswersModule { }
