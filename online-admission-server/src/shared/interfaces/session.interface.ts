import { User } from 'src/applicants/entities/applicant.entity';

export interface Session {
  user?: User;
  authToken?: string;
}
