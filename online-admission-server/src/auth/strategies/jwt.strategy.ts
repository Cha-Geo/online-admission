import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Request } from 'express';
import { Payload } from 'src/shared/interfaces/jwt_payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies[process.env.ACCESS_TOKEN_NAME];
          console.log(data);
          if (!data) {
            console.log('no data... Im stubborn asf');
            return null;
          }
          return data;
        },
      ]),
    });
  }

  async validate(payload: Payload) {
    console.log('here');
    const user = await this.authService.validateUser(payload);

    if (!user) {
      throw new Error('User not found');
    }

    console.log('user');
    return user;
  }
}
