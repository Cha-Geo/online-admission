import { Profile } from './profile.interface';
import { Role } from './enums/roles.enum';

export class RegistrationResponseModel {
  successStatus: boolean;
  message: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  readonly password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  refreshToken?: string | null;
  refreshTokenExp?: string | null;
  profile: Profile;
}

export interface SanitizedUser {
  id: string;
  username: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  profile: Profile;
}

export class CurrentUser {
  id: string;
  email: string;
  username: string;
  isActive: boolean;
  role: Role;
  profile: Profile;
}
