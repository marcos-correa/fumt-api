import { StudentsService } from './students.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Student } from './shared/student';

@Controller('students')
export class StudentsController {
  constructor(
    private studentsService:StudentsService
  ){

  }

  // @Get('getExamToAnswer/:userid/:examid')
  // async getExamToAnswer(@Param('userid') userid:string, @Param('examid') examid:string): Promise<Student>{
  //   return this.studentsService.getExamToAnswer(userid, examid)
  // }

  // @Get(':id')
  // async getExamById(@Param('id') id: string): Promise<Exam>{
  //   return this.studentsService.getExamById(id)
  // }

  // @Post()
  // async createExam(@Body() exam: Exam): Promise<Exam>{
  //   return this.studentsService.createExam(exam)
  // }

  // @Put(':id')
  // async updateExam(@Param('id') id: string, @Body() exam: Exam): Promise<Exam>{
  //   return this.studentsService.updateExam(id, exam);
  // }

  // @Delete(':id')
  // async deleteExam(@Param('id') id: string){
  //   this.studentsService.deleteExam(id)
  // }

}
