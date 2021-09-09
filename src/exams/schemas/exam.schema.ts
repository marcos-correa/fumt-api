import * as mongoose from 'mongoose';
import { QuestionSchema } from './question.schema';



export const ExamSchema = new mongoose.Schema({
  name:String,
  description:String,
  value:Number,
  valuePerQuestion:Number,
  totalQuestions:Number,
  created_at: Date,
  questions: [QuestionSchema]
})