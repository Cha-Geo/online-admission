import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { DtoValidationPipe } from 'src/shared/pipes/validation.pipe';
import { Response } from 'express';
import { Payload } from 'src/shared/interfaces/jwt.payload';
import { LocalJwtAuthGuard } from 'src/shared/guards/localJwt.guard';
import { User as UserInterface } from 'src/shared/interfaces/applicant.interface';
import { User } from 'src/shared/decorators/user.decorator';
import { LoginDto } from 'src/auth/dto';
import { AuthService } from 'src/auth/auth.service';
import { UserSuccess } from 'src/shared/utils/messages/user.success';

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
  async findOne(@Param('id') id: number) {
    return await this.applicantsService.findOne(id);
  }

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
    const foundUser = await this.applicantsService.findByLogin(userDto);
    console.log('found user: ', foundUser);
    const payload: Payload = {
      username: foundUser.username,
      email: foundUser.email,
    };

    const token = await this.authService.signPayload(payload);
    console.log('found token');
    const refreshToken = await this.applicantsService.getRefreshToken(user.id);
    console.log('created refresh token');

    const secretData = {
      token,
      refreshToken,
    };

    console.log(secretData);

    res.cookie('auth-cookie', secretData, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: 'localhost',
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return {
      user,
      msg: `${UserSuccess.SUCCESSFUL_LOGIN} ${foundUser.username}`,
    };
  }
}
