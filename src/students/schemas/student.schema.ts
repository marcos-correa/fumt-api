import * as mongoose from 'mongoose';
import { ExamSchema } from './exam.schema';

export const StudentSchema = new mongoose.Schema({
  userId:String,
  name:String,
  exams:[ExamSchema]
})