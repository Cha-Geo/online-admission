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
} from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';
import { Response } from 'express';
import { ProgramsImagesService } from 'src/images/programs_images/programs_images.service';

@Controller('programmes')
export class ProgrammesController {
  constructor(
    private readonly programmesService: ProgrammesService,
    private imageService: ProgramsImagesService,
  ) {}

  @Post()
  create(@Body() createProgrammeDto: CreateProgrammeDto) {
    return this.programmesService.create(createProgrammeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.programmesService.findAll();
    // res.redirect('/about');
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmesService.findOne(+id);
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
      const filename = file.filename; // Use 'filename' instead of 'image_name'
      const type = file.mimetype;
      const localFilePath = file.path;
      // const additionalData = body; // Use the @Body() decorator to access additional data
      const inputValues = { filename, type, localFilePath, originalname }; // Change 'image_name' to 'filename'
      const alertMsg = await this.imageService.storeImage(inputValues);

      console.log('done');
      return { alertMsg };
    } catch (error) {
      return { error: 'Error uploading the image' };
    }
  }
}
