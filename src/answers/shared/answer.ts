import { Document } from "mongoose";
import { Exam } from "src/exams/shared/exam";



export class Answer extends Document{
  examID:string;
  studentID:string;
  studentName:string;
  note:number;
  answered_at:Date;
  exam:Exam;
}