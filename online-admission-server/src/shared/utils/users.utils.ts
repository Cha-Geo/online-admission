import { User } from 'src/applicants/entities/applicant.entity';

export function sanitizeUser(user: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, refreshToken, refreshTokenExp, ...safeUser } = user;
  return safeUser;
}
