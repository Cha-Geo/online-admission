import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/applicant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
})
export class ApplicantsModule {}
