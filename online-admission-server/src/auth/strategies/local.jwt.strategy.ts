import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CurrentUser } from '../../shared/interfaces/applicant.interface';
import { ApplicantsService } from 'src/applicants/applicants.service';

@Injectable()
export class LocalJwtStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private userService: ApplicantsService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<CurrentUser> {
    const user = await this.userService.validateUserCredentialsByUsername(
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
