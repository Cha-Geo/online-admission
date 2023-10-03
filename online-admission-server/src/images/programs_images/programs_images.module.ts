import { Module } from '@nestjs/common';
import { ProgramsImagesService } from './programs_images.service';
import { ProgramsImagesController } from './programs_images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsImage } from './entities/programs_image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramsImage])],
  controllers: [ProgramsImagesController],
  providers: [ProgramsImagesService],
  exports: [TypeOrmModule],
})
export class ProgramsImagesModule {}
