import { Injectable } from '@nestjs/common';
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
  async storeImage(inputValues: IUploadFile): Promise<ProgramsImage | string> {
    console.log('here in service');
    try {
      const { filename, driveid } = inputValues;
      console.log('filename', filename);
      // Save the image data into the database
      const newImage = this.programImageRepository.create({
        filename,
        driveid,
      });
      await this.programImageRepository.save(newImage);
      console.log(newImage);

      return newImage;
    } catch (error) {
      console.log(error);
      throw new Error('Error storing the image in the DB');
    }
  }

  async getAllImages() {
    const directoryPath = '../online-admission-client/public/assets/images'; // Update with your directory path
    return getAllImagesInDirectory(directoryPath);
  }
}
