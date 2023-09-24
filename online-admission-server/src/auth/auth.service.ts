import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/shared/interfaces/jwt.payload';
import { Session } from 'src/shared/interfaces/session';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { User } from 'src/shared/interfaces/applicant.interface';

@Injectable()
export class AuthService {
  constructor(private applicantService: ApplicantsService) {}
  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' });
  }

  async validateUser(payload: Payload) {
    return await this.applicantService.findByPayload(payload);
  }

  // async login(user: User, session: Session): Promise<any> {
  //   const payload = {
  //     email: user.email,
  //   };
  //   console.log('email: ', payload.email);
  //   const authToken = await this.signPayload(payload);
  //   console.warn('auth', authToken);

  //   session.user = user; // Store user information in the session
  //   session.authToken = authToken; // Store the JWT in the session

  //   return {
  //     authToken: authToken,
  //     user: user,
  //   };
  // }

  // async validRefreshToken(
  //   email: string,
  //   refreshToken: string,
  // ): Promise<CurrentUser> {
  //   const currentDate = moment().day(1).format('YYYY/MM/DD');
  //   const user = await this.usersRepository.findOne({
  //     where: {
  //       email,
  //       refreshToken,
  //       refreshTokenExp: MoreThanOrEqual(currentDate), // Use TypeORM's MoreThanOrEqual
  //     },
  //   });

  //   if (!user) {
  //     return null;
  //   }

  //   const currentUser: CurrentUser = {
  //     id: user.id,
  //     firstName: user.profile.first_name,
  //     lastName: user.profile.last_name,
  //     email: user.email,
  //     username: user.username,
  //     isActive: user.isActive,
  //     role: user.role,
  //   };

  //   return currentUser;
  // }
}
