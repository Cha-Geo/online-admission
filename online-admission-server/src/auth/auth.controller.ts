import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/shared/decorators/user.decorator';
import { SanitizedUser } from 'src/shared/interfaces/applicant.interface';
import { DtoValidationPipe } from 'src/shared/pipes/validation.pipe';
import { CreateApplicantDto } from 'src/applicants/dto/create-applicant.dto';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { LocalJwtAuthGuard } from 'src/shared/guards/localJwt.guard';
import { LoginDto } from './dto';
import { GoogoleAuthService } from './google-auth.service';
import { writeFileSync } from 'fs';
import { RefreshJwtAuthGuard } from 'src/shared/guards/refreshJwt.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private applicantsService: ApplicantsService,
    private googleDriveService: GoogoleAuthService,
  ) {}

  @Get('google')
  async regWithGoogle(@Res() res: Response) {
    const url = await this.googleDriveService.getUrl();
    console.log(url);
    res.redirect(url);
  }

  @Get('callback/google')
  async redirectByGoogle(@Res() res: Response, @Req() req: Request) {
    const { code } = req.query;
    const client = await this.googleDriveService.getClient();
    const { tokens } = await client.getToken(code.toString());
    console.log(tokens);
    client.setCredentials(tokens);
    console.log(client.credentials);
    console.log('hjg', client.credentials.refresh_token);
    writeFileSync('public/credentials.json', JSON.stringify(tokens));
    res.send('Success.');
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

  @UseGuards(LocalJwtAuthGuard)
  @Post('login')
  async login(@Body(new DtoValidationPipe()) userDto: LoginDto) {
    return await this.authService.login(userDto);
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  async refreshToken(@User() user: SanitizedUser) {
    return await this.authService.refreshToken(user);
  }
}
