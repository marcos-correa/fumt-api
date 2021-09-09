import { StudentSchema } from './schemas/student.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';


@Module({
  imports: [
MongooseModule.forFeature([{name:'Student',schema:StudentSchema}])
  ],
  controllers: [
    StudentsController,
  ],
  providers: [
    StudentsService,
  ],
})
export class StudentsModule { }
