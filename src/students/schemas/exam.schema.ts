import * as mongoose from 'mongoose';
import { QuestionSchema } from './question.schema';

export const ExamSchema = new mongoose.Schema({
  examId:String,
  name:String,
  enunciate:String,
  answered_at:Date,
  note:Number,
  crrects:Number,
  incorrects:Number,
  listQuestions:[QuestionSchema],
})