import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ApplicantsService } from 'src/applicants/applicants.service';
import {
  CurrentUser,
  SanitizedUser,
  User,
} from 'src/shared/interfaces/applicant.interface';
import {
  ILogin,
  ITokens,
  Payload,
} from 'src/shared/interfaces/jwt_payload.interface';
import { compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto } from './dto';
import {
  appendRandomTextAndLength,
  getMoment,
  sanitizeUser,
} from 'src/shared/utils/users.utils';
import { Profile } from 'src/shared/interfaces/profile.interface';

@Injectable()
export class AuthService {
  constructor(private applicantService: ApplicantsService) {}

  async signPayload(payload: Payload, secret: string, exp: string) {
    return sign(payload, secret, { expiresIn: exp });
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

    if (user == null) {
      return null;
    }

    const isValidPassword = await compare(password, user.password);
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

    return currentUser;
  }

  async validateUser(dto: LoginDto) {
    console.log(dto);
    const { username, password } = dto;
    const user = await this.applicantService.findByUsername(username);

    const isValidPassword = await compare(password, user.password);

    if (user && isValidPassword) {
      return sanitizeUser(user);
    }

    throw new UnauthorizedException();
  }

  async refreshToken(user: SanitizedUser) {
    const payload: Payload = {
      username: user.email,
      sub: {
        name: user.username,
      },
    };

    const access_token = await this.signPayload(
      payload,
      process.env.SECRET_KEY,
      '1d',
    );

    const u_id = appendRandomTextAndLength(user.id);
    const refresh_token = await this.signPayload(
      payload,
      process.env.REFRESH_KEY,
      '2d',
    );

    const expiresIn = getMoment(45);

    const tokens: ITokens = {
      access_token,
      u_id,
      refresh_token,
      expiresIn,
    };

    return {
      tokens,
    };
  }

  async login(dto: LoginDto): Promise<ILogin> {
    const user = await this.validateUser(dto);

    const payload: Payload = {
      username: user.email,
      sub: {
        name: user.username,
      },
    };

    const access_token = await this.signPayload(
      payload,
      process.env.SECRET_KEY,
      '1d',
    );

    const u_id = appendRandomTextAndLength(user.id);
    const refresh_token = await this.signPayload(
      payload,
      process.env.REFRESH_KEY,
      '2d',
    );

    const expiresIn = getMoment(45);

    const tokens: ITokens = {
      access_token,
      u_id,
      refresh_token,
      expiresIn,
    };

    return {
      user,
      tokens,
    };
  }
  async findByPayload(payload: Payload) {
    const {
      sub: { name },
    } = payload;
    const usersRepository: Repository<User> =
      await this.applicantService.getUsersRepo();
    return await usersRepository.findOne({ where: { username: name } });
  }
  async verifyUser(payload: Payload): Promise<any> {
    const user = await this.findByPayload(payload);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...newUser } = user;

    return newUser;
  }
}
