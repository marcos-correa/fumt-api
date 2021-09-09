import * as mongoose from 'mongoose';
import { AlternativeSchema } from './alternative.schema';

export const QuestionSchema = new mongoose.Schema({ 
  enunciate: String,
  alternatives: [AlternativeSchema]
})