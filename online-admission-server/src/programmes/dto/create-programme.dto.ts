// create-program.dto.ts

import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProgrammeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  //   @IsString()
  //   @IsNotEmpty()
  //   readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly duration: number;

  @IsString() // Add this field to specify the image filename or ID
  readonly image: string;
}
