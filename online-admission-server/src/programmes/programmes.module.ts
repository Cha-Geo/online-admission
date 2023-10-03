import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme } from './entities/programme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programme])],
  controllers: [ProgrammesController],
  providers: [ProgrammesService],
  exports: [TypeOrmModule],
})
export class ProgrammesModule {}
