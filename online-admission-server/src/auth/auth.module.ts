import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ApplicantsModule } from 'src/applicants/applicants.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/shared/guards/Jwt.guard';
import { RolesGuard } from 'src/shared/guards/Roles.guard';
import { UserIsUserGuard } from 'src/shared/guards/VerifyUser.guard';
import { LocalJwtAuthGuard } from 'src/shared/guards/localJwt.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalJwtStrategy } from './strategies/local.jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.jwt.strategy';
import { GoogoleAuthService } from './google-auth.service';
import { ProgramsImagesService } from 'src/images/programs_images/programs_images.service';
import { ProgramsImagesModule } from 'src/images/programs_images/programs_images.module';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogoleAuthService,
    ProgramsImagesService,
    JwtStrategy,
    JwtAuthGuard,
    RefreshStrategy,
    LocalJwtAuthGuard,
    UserIsUserGuard,
    LocalJwtStrategy,
    RolesGuard,
  ],
  imports: [
    ApplicantsModule,
    ProgramsImagesModule,
    JwtModule.register({
      secret: 'My random secret key never let others',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
