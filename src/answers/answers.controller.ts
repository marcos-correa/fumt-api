import { AnswersService } from './answers.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Answer } from './shared/answer';
import { Exam } from 'src/exams/shared/exam';

@Controller('answers')
export class AnswersController {
  constructor(
    private answersService:AnswersService
  ){

  }

  // @Get('getExamToAnswer/:userid/:examid')
  // async getExamToAnswer(@Param('userid') userid:string, @Param('examid') examid:string): Promise<Student>{
  //   return this.studentsService.getExamToAnswer(userid, examid)
  // }

  @Get(':id')
  async getAnswerById(@Param('id') id: string): Promise<Answer>{
    return this.answersService.getAnswerById(id)
  }

  @Get('/getAnswredExamsByStudentId/:id')
  async getAnswredExamsByStudentId(@Param('id') studentID: string): Promise<Answer[]>{
    return this.answersService.getAnswredExamsByStudentId(studentID)
  }

  @Get('/getUnansweredExamsByStudentId/:id')
  async getUnansweredExamsByStudentId(@Param('id') studentID: string): Promise<Answer[]>{
    return this.answersService.getUnansweredExamsByStudentId(studentID)
  }

  @Post()
  async createAnswer(@Body() answer: Answer): Promise<Answer>{
    return this.answersService.createAnswer(answer)
  }

  // @Put(':id')
  // async updateExam(@Param('id') id: string, @Body() exam: Exam): Promise<Exam>{
  //   return this.studentsService.updateExam(id, exam);
  // }

  // @Delete(':id')
  // async deleteExam(@Param('id') id: string){
  //   this.studentsService.deleteExam(id)
  // }

}
