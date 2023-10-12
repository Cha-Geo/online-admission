import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/shared/decorators/user.decorator';
import { same_site } from 'src/shared/interfaces/Session';
import { User as UserInterface } from 'src/shared/interfaces/applicant.interface';
import { DtoValidationPipe } from 'src/shared/pipes/validation.pipe';
import { CreateApplicantDto } from 'src/applicants/dto/create-applicant.dto';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { LocalJwtAuthGuard } from 'src/shared/guards/localJwt.guard';
import { LoginDto } from './dto';
import { Payload } from 'src/shared/interfaces/jwt_payload.interface';
import { UserSuccess } from 'src/shared/utils/messages/user.success';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private applicantsService: ApplicantsService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Post('login')
  // async login(@User() user: UserType, @Session() session: SessionType) {
  //   return this.authService.login(user, session);
  // }

  @Post('register')
  async register(@Body(new DtoValidationPipe()) userDto: CreateApplicantDto) {
    try {
      const user = await this.applicantsService.create(userDto);
      return {
        user,
        msg: 'You have successfully created an account',
        // msg: SignInSuccess.REGISTRATION_SUCCESS,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @UseGuards(LocalJwtAuthGuard)
  async login(
    @User() user: UserInterface,
    @Body(new DtoValidationPipe()) userDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const foundUser = await this.applicantsService.findByLogin(userDto);

      if (!foundUser) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const payload: Payload = {
        username: foundUser.username,
        email: foundUser.email,
      };

      const access_token = await this.authService.signPayload(payload);
      // const refreshToken = await this.authService.getRefreshToken(foundUser.id);

      // const secretData = {
      //   token,
      //   refreshToken,
      // };

      res.cookie(process.env.ACCESS_TOKEN_NAME, access_token, {
        httpOnly: true,
        secure: true,
        sameSite: process.env.SAME_SITE as same_site,
        domain: process.env.COOKIE_DOMAIN,
      });
      res.setHeader(
        'Access-Control-Allow-Origin',
        process.env.ACCESS_CONTROL_ALLOW_ORIGIN || 'http://localhost:3000',
      );
      res.setHeader(
        'Access-Control-Allow-Credentials',
        process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS || 'true',
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Authorization, Content-Type',
      );
      return {
        foundUser,
        msg: `${UserSuccess.SUCCESSFUL_LOGIN} ${foundUser.username}`,
      };
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
