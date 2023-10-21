import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsImagesModule } from 'src/images/programs_images/programs_images.module';
import { Programmes } from './entities/programmes.entity';
import { GoogoleAuthService } from 'src/auth/google-auth.service';
import { MulterMiddleware } from 'src/shared/middlewares/uploads.middleware';
import { ImageMiddleware } from 'src/shared/middlewares/image.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Programmes]), ProgramsImagesModule],
  controllers: [ProgrammesController],
  providers: [ProgrammesService, GoogoleAuthService],
  exports: [TypeOrmModule],
})
export class ProgrammesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply Middleware1 to specific routes in YourController
    consumer
      .apply(MulterMiddleware)
      .forRoutes('programmes/upload', 'programmes/upload/');

    consumer
      .apply(ImageMiddleware)
      .forRoutes('programmes/drive', 'programmes/drive/uupload');

    consumer.apply(ImageMiddleware).forRoutes({
      path: 'programmes',
      method: RequestMethod.POST,
    });
  }
}
