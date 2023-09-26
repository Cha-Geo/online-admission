// middleware/auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as session from 'express-session';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Check authentication here and handle accordingly
    // For example, verify JWT tokens, check session, etc.
    // If authentication fails, you can respond with a 401 Unauthorized status
    session({
      secret: process.env.SESSION_SECRET || 'gilbuy-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hour
        secure: false,
        domain: 'localhost',
      },
    })(req, res, next);
    // next();
  }
}
