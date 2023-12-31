import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CurrentUser } from 'src/shared/interfaces/applicant.interface';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalJwtStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<CurrentUser> {
    const user = await this.authService.validateUserCredentialsByUsername(
      username,
      password,
    );

    if (!user) {
      console.log('I wont aunthenticate you!!!');
      throw new UnauthorizedException();
    }

    return user;
  }
}
