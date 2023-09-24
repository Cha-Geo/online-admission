import { User } from './applicant.interface';

export interface Session {
  user?: User;
  authToken?: string;
}
