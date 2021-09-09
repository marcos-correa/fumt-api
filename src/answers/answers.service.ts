import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { Answer } from './shared/answer';

@Injectable()
export class AnswersService {

  constructor(
    @InjectModel('Answer') private readonly answerModel: Model<Answer>,
  ) { }

  async createAnswer(answer: Answer) {
    answer["answered_at"] = new Date();
    const createdExam = new this.answerModel(answer);
    return await createdExam.save()
  }

  async getAnswerById(id: string) {
    return await this.answerModel.findById(id).exec();
  }

  async getAnswredExamsByStudentId(studentID: string) {
    return await this.answerModel.find({ studentID: studentID }).sort({ "_id": -1 }).exec();
  }

  async getUnansweredExamsByStudentId(studentID: string) {
    try {
      return await this.answerModel.aggregate([
        {
          $match: { studentID: studentID }
        },
        {
          $group: {
            _id: "$examID"
          }
        }
      ]).exec();
      
      
    } catch (error) {
      console.log(error)
    }



  }
}
