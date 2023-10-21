import NextAuth from 'next-auth';

declare module "next-auth" {
    interface Session {
        user: IUser;
        token: string;
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
    tokens: ITokens;
  }
}