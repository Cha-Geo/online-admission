import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalJwtAuthGuard extends AuthGuard(process.env.JWT_LOCAL) {}
