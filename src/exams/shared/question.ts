import { Alternative } from './alternative';
import { Document } from "mongoose";


export class Question extends Document {
  stated: string;
  alternatives: Alternative[] = new Alternative[5];
}
