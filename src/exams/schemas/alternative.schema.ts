import * as mongoose from 'mongoose';

export const AlternativeSchema = new mongoose.Schema({
  description: String,
  correct: Boolean,
  marked: Boolean,
})