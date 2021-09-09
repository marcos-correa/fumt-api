import { Document } from "mongoose";
import { Question } from "./question";


export class Exam extends Document{
  examId:string;
  name:string;
  enunciate:string;
  answered_at:Date;
  note:number;
  crrects:number;
  incorrects:number;
  listQuestions:Question[];
}