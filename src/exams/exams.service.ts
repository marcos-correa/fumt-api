import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam } from './shared/exam';


@Injectable()
export class ExamsService {

  constructor(
    @InjectModel('Exam') private readonly examModel: Model<Exam>
  ){

  }

  async getAllExams(){
    return await this.examModel.find().sort({"_id": -1}).exec();
  }

  async getExamById(id: string){
    return await this.examModel.findById(id).exec();
  } 

  async getExamToAnswer(id:string){
    try {
      let exam = await this.examModel.findById(id).exec();
      let _exam = exam.toObject()
      if(_exam){
        _exam.questions.forEach(ques=>{
          ques.alternatives.forEach(alt=>{
            delete alt.correct
          })
        })
        return _exam
      }
    } catch (error) {
      console.log(error)
    }
  }

  async createExam(exam:Exam){
    exam["created_at"] = new Date();
    const createdExam = new this.examModel(exam);    
    return await createdExam.save()
  }

  async updateExam(id: string, exam:Exam){
    await this.examModel.updateOne({_id: id}, exam).exec();
    return this.getExamById(id);
  }

  async deleteExam(id: string){
    return await this.examModel.deleteOne({_id:id}).exec();
  }
}
