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
  ParseFilePipe,
  MaxFileSizeValidator,
  HttpStatus,
  UploadedFiles,
} from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';
import { Response } from 'express';
import { GoogoleAuthService } from 'src/auth/google-auth.service';
import { getUniqueFilename } from 'src/shared/utils/uploads.utils';
import { ProgramsImage } from 'src/images/programs_images/entities/programs_image.entity';
import { Programmes } from './entities/programmes.entity';

@Controller('programmes')
export class ProgrammesController {
  constructor(
    private readonly programmesService: ProgrammesService,
    private googleDriveService: GoogoleAuthService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          // ... Set of file validator instances here
          new MaxFileSizeValidator({ maxSize: 2000 * 1024 }),
        ],
      }),
    )
    files: Express.Multer.File[],
    @Body() createProgramDto: { data: CreateProgrammeDto },
    @Res() res: Response,
  ) {
    console.log('here', files);
    try {
      const isCreate = true;
      let programImage: string | ProgramsImage;
      let program: Programmes;
      for (let i = 0; i < files.length; i++) {
        const originalname = files[i].originalname;
        const filename = getUniqueFilename(originalname);
        const type = files[i].mimetype;
        const buffer = files[i].buffer;

        programImage = await this.googleDriveService.uploadFile(
          originalname,
          type,
          buffer,
          filename,
          isCreate,
        );

        program = await this.programmesService.create(
          createProgramDto,
          programImage,
        );
      }
      res.status(200).send(`Program successfully uploaded`);
      return program; // Return the created program or a success message
    } catch (error) {
      // Handle errors
      throw new Error('Failed to create program: ' + error.message);
    }
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    const programmes = await this.programmesService.findAll();
    return programmes;
  }

  @Get('drive')
  @UseGuards(JwtAuthGuard)
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

  @Get('drive/list')
  @UseGuards(JwtAuthGuard)
  async allFiles() {
    return await this.googleDriveService.listFiles();
  }

  @Post('drive/upload')
  @UseGuards(JwtAuthGuard)
  async uploadImage(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          // ... Set of file validator instances here
          new MaxFileSizeValidator({ maxSize: 2000 * 1024 }),
        ],
      }),
    )
    files: Express.Multer.File[],
    @Res() res: Response,
  ) {
    console.log('here', files);
    try {
      for (let i = 0; i < files.length; i++) {
        const originalname = files[i].originalname;
        const filename = getUniqueFilename(originalname);
        const type = files[i].mimetype;
        const buffer = files[i].buffer;
        await this.googleDriveService.uploadFile(
          originalname,
          type,
          buffer,
          filename,
        );
      }
      res
        .status(200)
        .send(`File${files.length > 1 ? 's' : ''} successfully uploaded`);
    } catch (error) {
      res.send(error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateProgrammeDto: UpdateProgrammeDto,
  ) {
    return this.programmesService.update(+id, updateProgrammeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
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

  @Get('drive/files/:fileId/info')
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

  @Get('drive/files/:fileId/download')
  @UseGuards(JwtAuthGuard)
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

  @Get('drive/files/:fileId/view')
  async viewFile(@Param('fileId') fileId: string, @Res() res: Response) {
    console.log('file id: ', fileId);
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
      // const filename = metadataResponse.name;
      const contentType = metadataResponse.mimeType;

      // Set appropriate headers for image content type
      res.setHeader('Content-Type', contentType);

      // Send the image data as the response
      response.data
        .on('error', (err) => {
          console.error('Error downloading file to view', err);
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Error downloading file to view');
        })
        .pipe(res);

      response.data.on('end', () => {
        console.log('File downloaded to view');
      });
    } catch (error) {
      console.error('Error fetching file details', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Error fetching file details');
    }
  }
}
