import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  questionId:String,
  alternative:String,
  correct:Boolean,
  marked:Boolean,
  value:Number
})