// guards/auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Check if the user is authenticated (e.g., validate JWT token)
    if (!request.user) {
      return false; // Authentication failed
    }

    return true; // Authentication succeeded
  }
}
