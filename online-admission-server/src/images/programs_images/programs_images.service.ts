import { Injectable } from '@nestjs/common';
import { CreateProgramsImageDto } from './dto/create-programs_image.dto';
import { UpdateProgramsImageDto } from './dto/update-programs_image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramsImage } from './entities/programs_image.entity';
import { Repository } from 'typeorm';
import { IUploadFile } from 'src/shared/interfaces/file-upload.interface';
import { getAllImagesInDirectory } from 'src/shared/utils/uploads.utils';

@Injectable()
export class ProgramsImagesService {
  constructor(
    @InjectRepository(ProgramsImage)
    private programImageRepository: Repository<ProgramsImage>,
  ) {}
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

  async storeImage(
    inputValues: IUploadFile,
    createprogram?: boolean,
  ): Promise<ProgramsImage | string> {
    console.log('here in service');
    try {
      const { filename, type, localFilePath, originalname } = inputValues;
      console.log('filename', filename);

      // Check if an image with the same name already exists
      const existingImage = await this.programImageRepository.findOne({
        where: {
          originalname,
        },
      });
      console.log(existingImage);

      if (existingImage) {
        if (createprogram) {
          return existingImage;
        } else {
          return `${filename} already exists`;
        }
      } else {
        // Save the image data into the database
        const newImage = this.programImageRepository.create({
          type,
          filename,
          originalname,
          localFilePath,
        });
        await this.programImageRepository.save(newImage);
        console.log(newImage);

        if (createprogram) {
          return newImage;
        } else {
          return `${originalname} is uploaded successfully`;
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error storing the image');
    }
  }

  async getAllImages() {
    const directoryPath = '../online-admission-client/public/assets/images'; // Update with your directory path
    return getAllImagesInDirectory(directoryPath);
  }
}
