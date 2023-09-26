import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as session from 'express-session';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
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
  }
}

// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import { v4 as uuidv4 } from 'uuid';

// @Injectable()
// export class SessionMiddleware implements NestMiddleware {
//   private readonly SESSION_COOKIE_NAME = 'session_id';

//   use(req: Request, res: Response, next: NextFunction) {
//     let sessionId = req.cookies[this.SESSION_COOKIE_NAME];
//     if (!sessionId) {
//       sessionId = uuidv4(); // Generate a new session ID if it doesn't exist
//       res.cookie(this.SESSION_COOKIE_NAME, sessionId, { httpOnly: true });
//     }

//     // Attach the session ID to the request object for downstream use
//     req.sessionID = sessionId;

//     next();
//   }
// }

// import * as session from 'express-session';
// import { NestMiddleware, Injectable } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class SessionMiddleware implements NestMiddleware {
//   private sessionMiddleware = session({
//     secret: process.env.SESSION_SECRET || 'gilbuy-secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 3600000, // 1 hour
//       secure: false,
//       domain: 'localhost',
//     },
//   });

//   use(req: Request, res: Response, next: NextFunction) {
//     this.sessionMiddleware(req, res, next);
//   }
// }
