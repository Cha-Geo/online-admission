import { Injectable } from '@nestjs/common';
import { CreateProgramsImageDto } from './dto/create-programs_image.dto';
import { UpdateProgramsImageDto } from './dto/update-programs_image.dto';

@Injectable()
export class ProgramsImagesService {
  create(createProgramsImageDto: CreateProgramsImageDto) {
    return 'This action adds a new programsImage';
  }

  findAll() {
    return `This action returns all programsImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programsImage`;
  }

  update(id: number, updateProgramsImageDto: UpdateProgramsImageDto) {
    return `This action updates a #${id} programsImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} programsImage`;
  }
}
