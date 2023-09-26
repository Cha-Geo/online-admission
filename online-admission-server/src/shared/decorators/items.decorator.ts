import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
// import { Item } from 'src/shared/types/item';

export const ItemParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);
