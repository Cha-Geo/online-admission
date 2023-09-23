import { Controller, Get } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';

@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) {}

  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }
}
