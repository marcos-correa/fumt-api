import { MongooseModule } from '@nestjs/mongoose';
import { ExamSchema } from './schemas/exam.schema';
import { QuestionSchema } from './schemas/question.schema';
import { AlternativeSchema } from './schemas/alternative.schema';
import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'Exam',        schema: ExamSchema }]),
    MongooseModule.forFeature([{name:'Question',    schema: QuestionSchema }]),
    MongooseModule.forFeature([{name:'Alternative', schema: AlternativeSchema }])
  ],
  controllers: [ExamsController],
  providers: [ExamsService],
  exports:[ExamsService]
})
export class ExamsModule {}
