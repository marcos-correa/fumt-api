import { Document } from "mongoose";
import { Question } from "./question";

export class Exam extends Document {
  name:string;
  description:string;
  questions:Question[];
  value:Number;
  valuePerQuestion:Number;
  totalQuestions:Number;
  created_at: Date;
}
