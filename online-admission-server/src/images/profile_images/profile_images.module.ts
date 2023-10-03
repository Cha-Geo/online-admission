import { Module } from '@nestjs/common';
import { ProfileImagesService } from './profile_images.service';
import { ProfileImagesController } from './profile_images.controller';

@Module({
  controllers: [ProfileImagesController],
  providers: [ProfileImagesService],
})
export class ProfileImagesModule {}
