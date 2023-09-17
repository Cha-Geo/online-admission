import { Applicant } from './applicant';

export interface Session {
  user?: Applicant;
  authToken?: string;
}
