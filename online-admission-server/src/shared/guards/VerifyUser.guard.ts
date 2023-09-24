import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { User } from '../interfaces/applicant.interface';

export class UserIsUserGuard implements CanActivate {
  constructor(private userService: ApplicantsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.user as User;
    console.log('user: ', user);
    console.log('user email: ', user.email);
    console.log(this.userService);

    try {
      const verifiedUser = this.userService.findUser(user.email);
      console.log(verifiedUser);
      const isValid = () => {
        let hasPermission = false;
        // Adjust this comparison logic based on your requirements
        if (verifiedUser) {
          hasPermission = true;
        }
        console.log('has permission', hasPermission);
        return hasPermission;
      };
      console.log('is valid', isValid());

      if (user && isValid()) {
        return true;
      }
      throw new HttpException('Unauthorized Access', HttpStatus.UNAUTHORIZED);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
