import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/applicant.interface';
import { Role } from '../interfaces/enums/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    if (user) {
      const hasRole = () => roles.indexOf(user.role) > -1;
      let hasPermission = false;

      if (hasRole()) {
        hasPermission = true;
      }
      return user && hasPermission;
    }
    throw new HttpException('Unauthorized Access', HttpStatus.UNAUTHORIZED);
  }
}
