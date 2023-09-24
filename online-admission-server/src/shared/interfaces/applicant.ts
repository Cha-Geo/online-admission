import { Profile } from './profile';
import { Role } from '../enums/roles.enum';
import { ObjectId } from 'typeorm';

export class RegistrationResponseModel {
  successStatus: boolean;
  message: string;
}

export class CurrentApplicant {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}
export interface Applicant extends Document {
  _id: ObjectId;
  readonly password: string;
  email: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
  is_admin: boolean;
  last_login: Date;
  profile: Profile;
}
