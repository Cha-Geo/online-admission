import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { Payload } from 'src/shared/interfaces/jwt_payload.interface';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(private authService: AuthService) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.REFRESH_KEY,
      jwtFromRequest: (request: Request) => {
        console.log('here');
        const authHeader = request.headers.authorization;
        console.log(authHeader);
        if (authHeader && authHeader.split(' ')[0] === 'Refresh') {
          return authHeader.split(' ')[1];
        }
        return undefined;
      },
    });
  }

  async validate(payload: Payload) {
    console.log('passed');
    const user = await this.authService.verifyUser(payload);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
