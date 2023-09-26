import { User } from './applicant.interface';

export interface Session {
  user?: User;
  authToken?: string;
}

export type same_site = 'lax' | 'strict' | 'none';
