import { Injectable } from '@nestjs/common';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramsImage } from 'src/images/programs_images/entities/programs_image.entity';
import { Programmes } from './entities/programmes.entity';

@Injectable()
export class ProgrammesService {
  constructor(
    @InjectRepository(Programmes)
    private programRepository: Repository<Programmes>,
  ) {}

  async getProgramsRepo(): Promise<Repository<Programmes>> {
    return this.programRepository;
  }

  async create(
    createProgramDto: { data: CreateProgrammeDto },
    image: string | ProgramsImage,
  ) {
    const { data } = createProgramDto;
    const images = [];
    images.push(image);

    const newData: CreateProgrammeDto = JSON.parse(data as unknown as string);
    const { name, duration } = newData;

    try {
      const newProgram = this.programRepository.create({
        name,
        duration,
        images,
      });
      await this.programRepository.save(newProgram);
      console.log('new program: ', newProgram);

      return newProgram;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // Duplicate entry error, handle it by throwing your custom error
        throw new Error('Program name is already in use.');
      }
      // Handle other errors or re-throw them as needed
      throw error;
    }
  }

  async findAll() {
    return await this.programRepository.find({ relations: ['images'] });
  }

  async findOne(id: string) {
    try {
      // Query the program by id, including its related images
      const program = await this.programRepository.findOne({
        where: { id },
        relations: ['images'],
      });

      if (!program) {
        throw new Error('No Program found');
      }

      return program;
    } catch (error) {
      // Handle any database query errors
      console.error(error);
      throw error;
    }
  }

  update(id: number, updateProgrammeDto: UpdateProgrammeDto) {
    return `This action updates a #${id} programme`;
  }

  remove(id: number) {
    return `This action removes a #${id} programme`;
  }

  async getImage(id: string): Promise<Programmes | null> {
    try {
      const program = await this.programRepository.findOne({
        where: { id },
        relations: ['images'],
      });

      return program || null;
    } catch (error) {
      // Handle any database query errors
      console.error(error);
      throw error;
    }
  }
}
