import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import * as multer from 'multer';
import { CustomRequest } from '../interfaces/custom-request.interface';

@Injectable()
export class ImageMiddleware implements NestMiddleware {
  private readonly storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  private readonly allowedImage = (
    req: CustomRequest,
    file: Express.Multer.File,
    cb: (error: Error | null, acceptFile: boolean) => void,
  ): void => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };

  public use(req: CustomRequest, res: Response, next: NextFunction): any {
    const upload = multer({
      storage: this.storage,
      fileFilter: this.allowedImage,
    }).single('image');
    upload(req, res, function (err: any) {
      if (err instanceof multer.MulterError) {
        res.status(400).json({ error: 'Multer error: ' + err.message });
      } else if (err) {
        res
          .status(500)
          .json({ error: 'Error uploading the image: ' + err.message });
      } else {
        next();
      }
    });
  }
}
