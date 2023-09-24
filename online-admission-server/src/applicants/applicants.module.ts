import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/applicant.entity';
import { Profile } from './entities/applicant.profile.enity';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  controllers: [ApplicantsController],
  providers: [ApplicantsService, AuthService],
  exports: [TypeOrmModule],
})
export class ApplicantsModule {}
