import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsImagesModule } from 'src/images/programs_images/programs_images.module';
import { Programmes } from './entities/programmes.entity';
import { GoogoleAuthService } from 'src/auth/google-auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Programmes]), ProgramsImagesModule],
  controllers: [ProgrammesController],
  providers: [ProgrammesService, GoogoleAuthService],
  exports: [TypeOrmModule],
})
export class ProgrammesModule {}
