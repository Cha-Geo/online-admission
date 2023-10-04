// /* eslint-disable @typescript-eslint/no-empty-function */
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as multer from 'multer';

// @Injectable()
// export class MulterMiddleware implements NestMiddleware {
//   constructor() {}

//   use(req: Request, res: Response, next: NextFunction) {
//     const storage = multer.memoryStorage(); // Use memory storage to store files in memory

//     const upload = multer({ storage, fileFilter: this.imageFilter }).single(
//       'filename', // Adjust the field name as needed
//     );

//     upload(req, res, function (err) {
//       console.log('middleware');
//       if (err instanceof multer.MulterError) {
//         // Handle Multer error (e.g., file size exceeded)
//         return res.status(400).send('Multer error: ' + err.message);
//       } else if (err) {
//         // Handle other errors
//         return res.status(500).send('Error: ' + err.message);
//       }
//       console.log('passed');
//       next();
//       console.log('img filter');
//     });
//   }

//   private imageFilter(req, file: Express.Multer.File, cb) {
//     if (file.mimetype.startsWith('image')) {
//       cb(null, true);
//     } else {
//       cb(new Error('Please upload only images.'), false);
//     }
//   }
// }

/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';

@Injectable()
export class MulterMiddleware implements NestMiddleware {
  constructor() {}

  use(req: Request, res: Response, next: NextFunction) {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'public/images/'); // Adjust the destination folder as needed
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname);
      },
    });

    const upload = multer({ storage, fileFilter: this.imageFilter }).single(
      'filename',
    ); // Adjust the field name as needed

    upload(req, res, function (err) {
      console.log('middleware');
      if (err instanceof multer.MulterError) {
        // Handle Multer error (e.g., file size exceeded)
        return res.status(400).send('Multer error: ' + err.message);
      } else if (err) {
        // Handle other errors
        return res.status(500).send('Error: ' + err.message);
      }
      console.log('passed');
      next();
      console.log('img filter');
    });
  }

  private imageFilter(req, file: Express.Multer.File, cb) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Please upload only images.'), false);
    }
  }
}
