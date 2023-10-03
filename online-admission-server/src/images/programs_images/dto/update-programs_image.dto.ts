import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramsImageDto } from './create-programs_image.dto';

export class UpdateProgramsImageDto extends PartialType(
  CreateProgramsImageDto,
) {}
