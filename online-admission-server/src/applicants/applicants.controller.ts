import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { DtoValidationPipe } from 'src/shared/pipes/validation.pipe';
import { Response } from 'express';
import { Payload } from 'src/shared/interfaces/jwt_payload.interface';
import { LocalJwtAuthGuard } from 'src/shared/guards/localJwt.guard';
import { User as UserInterface } from 'src/shared/interfaces/applicant.interface';
import { User } from 'src/shared/decorators/user.decorator';
import { LoginDto } from 'src/auth/dto';
import { AuthService } from 'src/auth/auth.service';
import { UserSuccess } from 'src/shared/utils/messages/user.success';
import { same_site } from 'src/shared/interfaces/session';

@Controller('applicants')
export class ApplicantsController {
  constructor(
    private readonly applicantsService: ApplicantsService,
    private authService: AuthService,
  ) {}

  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.applicantsService.findOne(id);
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
        process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
      );
      res.setHeader(
        'Access-Control-Allow-Credentials',
        process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS,
      );
      res.redirect('/about');
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
