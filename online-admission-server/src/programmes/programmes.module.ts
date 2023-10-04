import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme } from './entities/programme.entity';
import { ProgramsImagesModule } from 'src/images/programs_images/programs_images.module';

@Module({
  imports: [TypeOrmModule.forFeature([Programme]), ProgramsImagesModule],
  controllers: [ProgrammesController],
  providers: [ProgrammesService],
  exports: [TypeOrmModule],
})
export class ProgrammesModule {}
