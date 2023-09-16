import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdmissionModule } from './admission/admission.module';
import { ApplicantsModule } from './applicants/applicants.module';
import { ProgrammesModule } from './programmes/programmes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [AdmissionModule, ApplicantsModule, ProgrammesModule, AuthModule, ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
