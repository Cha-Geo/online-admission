import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from '../../shared/interfaces/jwt.payload';
import { AuthService } from '../auth.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          console.log(data);
          if (!data) {
            console.log('no data... Im stubborn asf');
            return null;
          }
          return data.token;
        },
      ]),
    });
  }

  async validate(payload: Payload) {
    const user = await this.authService.validateUser(payload);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
