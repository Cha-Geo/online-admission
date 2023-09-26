import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Session } from 'src/shared/interfaces/session';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { CurrentUser, User } from 'src/shared/interfaces/applicant.interface';
import { Payload } from 'src/shared/interfaces/jwt_payload.interface';
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Profile } from 'src/shared/interfaces/profile.interface';

@Injectable()
export class AuthService {
  constructor(private applicantService: ApplicantsService) {}
  async signPayload(payload: Payload) {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: '1000' });
  }

  async getRefreshToken(userId: string): Promise<string> {
    const usersRepository: Repository<User> =
      await this.applicantService.getUsersRepo();
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };

    const user = await usersRepository.findOne({ where: { id: userId } });
    console.log('user in auth: ', user);

    if (user) {
      // Update the user entity with new refreshToken and refreshTokenExp
      user.refreshToken = userDataToUpdate.refreshToken;
      user.refreshTokenExp = userDataToUpdate.refreshTokenExp;

      // Save the updated user entity to the database
      await usersRepository.save(user);

      return userDataToUpdate.refreshToken;
    } else {
      // Handle the case when the user is not found
      throw new Error('User not found');
    }
  }

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<CurrentUser> {
    const usersRepository: Repository<User> =
      await this.applicantService.getUsersRepo();
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    const user = await usersRepository.findOne({ where: { email } });
    console.log(`user: ${user}`);

    if (user == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(`check password match: ${isValidPassword}`);
    if (!isValidPassword) {
      return null;
    }

    const currentUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      isActive: user.isActive,
      role: user.role,
      profile: user.profile,
    };
    console.log(currentUser);

    return currentUser;
  }

  async validateUserCredentialsByUsername(
    user_name: string,
    password: string,
  ): Promise<CurrentUser> {
    const usersRepository: Repository<User> =
      await this.applicantService.getUsersRepo();
    const profileRepository: Repository<Profile> =
      await this.applicantService.getProfilesRepo();
    const user = await usersRepository.findOne({
      where: { username: user_name },
      relations: ['profile'],
    });
    console.log('user: ', user);

    if (user == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(`check password match: ${isValidPassword}`);
    if (!isValidPassword) {
      return null;
    }

    const currentUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      profile: user?.profile ? user.profile : profileRepository.create(),
      isActive: user.isActive,
      role: user.role,
    };
    console.log(currentUser);

    return currentUser;
  }

  async validateUser(payload: Payload) {
    return await this.applicantService.findByPayload(payload);
  }

  async validRefreshToken(
    email: string,
    refreshToken: string,
  ): Promise<CurrentUser> {
    const usersRepository: Repository<User> =
      await this.applicantService.getUsersRepo();
    const currentDate = moment().day(1).format('YYYY/MM/DD');
    const user = await usersRepository.findOne({
      where: {
        email,
        refreshToken,
        refreshTokenExp: MoreThanOrEqual(currentDate), // Use TypeORM's MoreThanOrEqual
      },
    });

    if (!user) {
      console.log('failed to refresh');
      return null;
    }

    console.log('passed');

    const currentUser: CurrentUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      isActive: user.isActive,
      role: user.role,
      profile: user.profile,
    };

    console.log('passed: ', currentUser);

    return currentUser;
  }

  async login(user: User, session: Session): Promise<any> {
    const payload = {
      email: user.email,
      username: user.username,
    };
    console.log('email: ', payload.email);
    const authToken = await this.signPayload(payload);
    console.warn('auth', authToken);

    session.user = user; // Store user information in the session
    session.authToken = authToken; // Store the JWT in the session

    return {
      authToken: authToken,
      user: user,
    };
  }
}
