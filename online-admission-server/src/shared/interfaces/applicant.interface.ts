import { Profile } from './profile.interface';
import { Role } from './enums/roles.enum';

export class RegistrationResponseModel {
  successStatus: boolean;
  message: string;
}

export interface User {
  id: number;
  firstName: string;
  username: string;
  lastName: string;
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

// export class CurrentUser {
//   _id: mongoose.Types.ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
// }
