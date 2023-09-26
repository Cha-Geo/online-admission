import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User as UserInterface } from '../interfaces/applicant.interface';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserInterface => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.user as UserInterface;
  },
);
