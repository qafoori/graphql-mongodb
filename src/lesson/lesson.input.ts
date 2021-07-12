import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator'

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(1)
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field(type => [ID], { defaultValue: [] })
  students: string[];
}