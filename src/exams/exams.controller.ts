import { Exam } from './shared/exam';
import { ExamsService } from './exams.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('exams')
export class ExamsController {

  constructor(
    private examsService:ExamsService
  ){}

  @Get()
  async getAllExams(): Promise<Exam[]>{
    return this.examsService.getAllExams()
  }

  @Get(':id')
  async getExamById(@Param('id') id: string): Promise<Exam>{
    return this.examsService.getExamById(id)
  }

  @Get('getExamToAnswer/:id')
  async getExamToAnswer(@Param('id') id: string){
    return this.examsService.getExamToAnswer(id)
  }

  @Post()
  async createExam(@Body() exam: Exam): Promise<Exam>{
    return this.examsService.createExam(exam)
  }

  @Put(':id')
  async updateExam(@Param('id') id: string, @Body() exam: Exam): Promise<Exam>{
    return this.examsService.updateExam(id, exam);
  }

  @Delete(':id')
  async deleteExam(@Param('id') id: string){
    this.examsService.deleteExam(id)
  }
}
