import {
  BadRequestException,
  Injectable,
  //   UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from '../../shared/interfaces/jwt_payload.interface';
import { ApplicantsService } from 'src/applicants/applicants.service';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(private userService: ApplicantsService) {
    super({
      ignoreExpiration: true,
      passReqToCallback: true,
      secretOrKey: 'My random secret key never let others',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          if (!data) {
            return null;
          }
          return data.token;
        },
      ]),
    });
  }

  async validate(req: Request, payload: Payload) {
    if (!payload) {
      throw new BadRequestException('invalid jwt token');
    }
    const data = req?.cookies['auth-cookie'];
    if (!data?.refreshToken) {
      throw new BadRequestException('invalid refresh token');
    }
    const user = await this.userService.validRefreshToken(
      payload.email,
      data.refreshToken,
    );
    if (!user) {
      throw new BadRequestException('token expired');
    }

    return user;
  }
}
