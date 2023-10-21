import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';

@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) {}

  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.applicantsService.findOne(id);
  }
}
