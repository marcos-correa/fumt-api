import { Document } from "mongoose";


export class Question extends Document{
  questionId:string;
  alternative:string;
  correct:boolean;
  marked:boolean;
  value:number;
}