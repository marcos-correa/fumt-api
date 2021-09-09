import { Document } from "mongoose";
import { Exam } from "./exam";


export class Student extends Document{
  userId:string;
  name:string;
  exams:Exam[];
}