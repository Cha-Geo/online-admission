import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  HttpStatus,
} from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';
import { Response } from 'express';
import { ProgramsImagesService } from 'src/images/programs_images/programs_images.service';
import { GoogoleAuthService } from 'src/auth/google-auth.service';

@Controller('programmes')
export class ProgrammesController {
  constructor(
    private readonly programmesService: ProgrammesService,
    private imageService: ProgramsImagesService,
    private googleDriveService: GoogoleAuthService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // ... Set of file validator instances here
          new MaxFileSizeValidator({ maxSize: 2000 * 1024 }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() createProgramDto: { data: CreateProgrammeDto },
  ) {
    try {
      console.log(createProgramDto);
      const isProgram = true;
      const originalname = file.originalname;
      const filename = file.filename;
      const type = file.mimetype;
      const localFilePath = file.path;
      const fileInfo = {
        filename,
        originalname,
        type,
        localFilePath,
      };
      const programImage = await this.imageService.storeImage(
        fileInfo,
        isProgram,
      );

      if (!programImage) {
        throw new Error(`Image with filename ${originalname} not found.`);
      }

      console.log('image to save: ', programImage);
      const program = await this.programmesService.create(
        createProgramDto,
        programImage,
      );

      return program; // Return the created program or a success message
    } catch (error) {
      // Handle errors
      throw new Error('Failed to create program: ' + error.message);
    }
  }

  @Get()
  findAll() {
    console.log('im here');
    return this.programmesService.findAll();
  }

  @Get('images')
  async getAllImages(@Res() res: Response) {
    console.log('about to');
    try {
      const images = await this.imageService.getAllImages();
      return res.status(200).json(images); // Return the images directly without wrapping in an object
    } catch (error) {
      // Handle errors here
      return res.status(500).json({ error: 'Error fetching images' });
    }
  }

  @Get('download')
  async downloadFile(@Res() res: Response) {
    try {
      const file = await this.googleDriveService.downloadFile(
        '1MftT_-7bfwXq1Re6ab0C_s39h3XdM0ZE',
      );

      if (!file) {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'File not found' });
        return;
      }
      res.send(file.data);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error downloading file' });
    }
  }

  @Get('files/:fileId/info')
  async fileInfo(@Param('fileId') fileId: string, @Res() res: Response) {
    try {
      const drive = await this.googleDriveService.getDrive();
      const metadata = await this.googleDriveService.getFileMetadata(
        fileId,
        drive,
      );
      const filename = metadata.name;
      console.log('filename: ', filename);

      res.status(HttpStatus.OK).json({ filename }); // Send a JSON response with the filename
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: `Error downloading file: ${error}` });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgrammeDto: UpdateProgrammeDto,
  ) {
    return this.programmesService.update(+id, updateProgrammeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programmesService.remove(+id);
  }

  @Get('image/:id')
  async getProgramImage(@Param('id') id: string, @Res() res: Response) {
    // Use the program service to get the program and its associated images
    const program = await this.programmesService.getImage(id);

    if (!program) {
      // Handle program not found
      return res.status(404).send('Program not found');
    }

    // Set appropriate headers for the image type (if needed)
    res.setHeader('Content-Type', 'image/jpeg'); // Adjust to match your image type

    // Send the image data as the response (assuming you have imageData in your entity)
    res.send(program.images[0].filename); // Assuming you have imageData in your entity
  }

  // @Get('download/:fileId')
  // async downloadAFile(@Param('fileId') fileId: string, @Res() res: Response) {
  //   const drive = await this.googleDriveService.getDrive();
  //   try {
  //     const response = await drive.files.get(
  //       {
  //         fileId,
  //         alt: 'media',
  //       },
  //       { responseType: 'stream' },
  //     );

  //     const dest = fs.createWriteStream('downloaded-file.png'); // Specify the destination file

  //     response.data
  //       .on('end', () => {
  //         console.log('File downloaded');
  //         res.status(HttpStatus.OK).send('File downloaded');
  //       })
  //       .on('error', (err) => {
  //         console.error('Error downloading file', err);
  //         res
  //           .status(HttpStatus.INTERNAL_SERVER_ERROR)
  //           .send('Error downloading file');
  //       })
  //       .pipe(dest); // Pipe the response stream to the destination file
  //   } catch (error) {
  //     console.error('Error fetching file details', error);
  //     res
  //       .status(HttpStatus.INTERNAL_SERVER_ERROR)
  //       .send('Error fetching file details');
  //   }
  // }

  // @Get('download/:fileId')
  // async downloadAFile(@Param('fileId') fileId: string, @Res() res: Response) {
  //   const drive = await this.googleDriveService.getDrive();
  //   try {
  //     const response = await drive.files.get(
  //       {
  //         fileId,
  //         alt: 'media',
  //       },
  //       { responseType: 'stream' },
  //     );

  //     const dest = fs.createWriteStream('downloaded-file.png'); // Specify the destination file

  //     response.data
  //       .on('end', () => {
  //         console.log('File downloaded');
  //         const filename = 'downloaded-file.png';

  //         // Set the appropriate Content-Type header for the file
  //         res.setHeader('Content-Type', 'image/png');

  //         // Prompt the user to choose the download location
  //         res.setHeader(
  //           'Content-Disposition',
  //           `attachment; filename=${filename}`,
  //         );

  //         // Send the downloaded file as the response
  //         const readStream = fs.createReadStream(filename);
  //         readStream.pipe(res);

  //         readStream.on('end', () => {
  //           fs.unlinkSync(filename); // Delete the temporary file after sending
  //         });
  //       })
  //       .on('error', (err) => {
  //         console.error('Error downloading file', err);
  //         res
  //           .status(HttpStatus.INTERNAL_SERVER_ERROR)
  //           .send('Error downloading file');
  //       })
  //       .pipe(dest); // Pipe the response stream to the destination file
  //   } catch (error) {
  //     console.error('Error fetching file details', error);
  //     res
  //       .status(HttpStatus.INTERNAL_SERVER_ERROR)
  //       .send('Error fetching file details');
  //   }
  // }

  @Get('download/:fileId')
  async downloadAFile(@Param('fileId') fileId: string, @Res() res: Response) {
    const drive = await this.googleDriveService.getDrive();
    try {
      const metadataResponse = await this.googleDriveService.getFileMetadata(
        fileId,
        drive,
      );

      const response = await drive.files.get(
        {
          fileId,
          alt: 'media',
        },
        { responseType: 'stream' },
      );
      const filename = metadataResponse.name;
      const type = metadataResponse.mimeType;

      // res.setHeader('Content-Type', type);
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      res.setHeader('Content-Type', 'application/octet-stream');

      response.data
        .on('error', (err) => {
          console.error('Error downloading file', err);
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Error downloading file');
        })
        .pipe(res);

      response.data.on('end', () => {
        console.log('File downloaded');
      });
    } catch (error) {
      console.error('Error fetching file details', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Error fetching file details');
    }
  }

  @Post('upload')
  async storeImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // ... Set of file validator instances here
          new MaxFileSizeValidator({ maxSize: 2000 * 1024 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log('here', file);

    try {
      console.log('here');
      const originalname = file.originalname;
      const filename = file.filename;
      const type = file.mimetype;
      const localFilePath = file.path;
      const inputValues = { filename, type, localFilePath, originalname };
      const alertMsg = await this.imageService.storeImage(inputValues);

      console.log('done');
      return { alertMsg };
    } catch (error) {
      console.log(error);
      return { error: 'Error uploading the image' };
    }
  }

  @Get('upload/drive')
  async allFiles() {
    return await this.googleDriveService.listFiles();
  }

  // @Get('upload/drive/:sampleText')
  // // @UseGuards(JwtAuthGuard)
  // async UploadToDrive(@Param('sampleText') sampleText: string) {
  //   console.log('im woring dw.');
  //   const drive = await this.googleDriveService.getDrive();
  //   console.log(drive);

  //   await drive.files.create({
  //     requestBody: {
  //       name: 'test.txt',
  //       mimeType: 'text/plain',
  //     },
  //     media: {
  //       mimeType: 'text/plain',
  //       body: sampleText,
  //     },
  //   });
  //   return 'Success.';
  // }

  @Get('upload/drive/image')
  async uploadImage() {
    return await this.googleDriveService.uploadBasic();
  }

  // @Get('download/:fileId')
  // async downloadFile(@Param('fileId') fileId: string, @Res() res: Response) {
  //   try {
  //     return await this.googleDriveService.downloadFile();
  //   } catch (error) {
  //     // Handle errors
  //     res
  //       .status(HttpStatus.INTERNAL_SERVER_ERROR)
  //       .json({ error: 'Error downloading file' });
  //   }
  // }
}
