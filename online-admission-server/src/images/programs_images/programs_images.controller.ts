import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgramsImagesService } from './programs_images.service';
import { CreateProgramsImageDto } from './dto/create-programs_image.dto';
import { UpdateProgramsImageDto } from './dto/update-programs_image.dto';

@Controller('programs-images')
export class ProgramsImagesController {
  constructor(private readonly programsImagesService: ProgramsImagesService) {}

  @Post()
  create(@Body() createProgramsImageDto: CreateProgramsImageDto) {
    return this.programsImagesService.create(createProgramsImageDto);
  }

  @Get()
  findAll() {
    return this.programsImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programsImagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgramsImageDto: UpdateProgramsImageDto,
  ) {
    return this.programsImagesService.update(+id, updateProgramsImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programsImagesService.remove(+id);
  }
}
