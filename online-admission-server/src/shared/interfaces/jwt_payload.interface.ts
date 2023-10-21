import { SanitizedUser } from './applicant.interface';

export interface Payload {
  username: string;
  sub: {
    name: string;
  };
}

export interface ITokens {
  access_token: string;
  u_id: string;
  refresh_token: string;
  expiresIn: number;
}

export interface ILogin {
  user: SanitizedUser;
  tokens: ITokens;
}
