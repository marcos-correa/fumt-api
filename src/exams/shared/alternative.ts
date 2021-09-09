import { Document } from "mongoose";

export class Alternative extends Document {
  description: string;
  correct: boolean;
}
