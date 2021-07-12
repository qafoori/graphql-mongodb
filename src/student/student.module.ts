import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentRsolver } from './student.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  providers: [
    StudentService,
    StudentRsolver
  ],
  exports: [
    StudentService
  ]
})
export class StudentModule { }
