import { Profile } from './profile.interface';
import { Role } from './enums/roles.enum';

export class RegistrationResponseModel {
  successStatus: boolean;
  message: string;
}

// export class CurrentUser {
//   _id: mongoose.Types.ObjectId;
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
// }
// export interface User extends Document {
//   _id: mongoose.Types.ObjectId;
//   readonly password: string;
//   email: string;
//   role: Role;
//   created_at: Date;
//   updated_at: Date;
//   is_admin: boolean;
//   last_login: Date;
//   profile: Profile;
// }
