import { Controller, Post, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';
import { User as UserType } from 'src/shared/interfaces/applicant.interface';
import { User } from 'src/shared/decorators/user.decorator';
import { Session as SessionType } from 'src/shared/interfaces/Session';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@User() user: UserType, @Session() session: SessionType) {
    return this.authService.login(user, session);
  }
}
