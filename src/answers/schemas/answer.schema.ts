import { ExamSchema } from '../../exams/schemas/exam.schema';
import * as mongoose from 'mongoose';

export const AnswerSchema = new mongoose.Schema({
  examID:String,
  studentID:String,
  studentName:String,
  note:Number,
  answered_at:Date,
  userId:String,
  name:String,
  exam:ExamSchema
})