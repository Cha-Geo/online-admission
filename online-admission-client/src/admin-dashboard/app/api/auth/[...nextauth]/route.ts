import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from "next-auth/jwt";
import { AuthRequiredError } from "@/lib/exceptions";
import { API } from "../../config";

async function refreshToken(token: JWT): Promise<JWT> {
  const response = await fetch(`${API}/auth/refresh`, {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.tokens.refresh_token}`
    },
    credentials: 'include',
  });

  if (!response.ok) {
    console.log('error is occuring right here');
    throw new AuthRequiredError('Your Session has Expired. Sign in again to continue.')
  }

  const res = await response.json() as ITokens;
  res && console.log('refreshed', res);

  return {
    ...token,
    tokens: res,
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;

        const res = await fetch(`${API}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 401) {
          console.log(res.statusText);

          throw new Error('Incorrect Credentials');
        }

        const user = await res.json();
        if (res.ok && user) {
  
          return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.tokens.expiresIn!) {
        return token;
      }

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.access_token = token.tokens.access_token;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,

    pages: {
      // signIn: "/login", // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
      // signOut: "/",
    },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };