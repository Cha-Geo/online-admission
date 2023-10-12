// auth.config.ts

export const googleOAuthConfig = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URL, // Adjust the URL
};
