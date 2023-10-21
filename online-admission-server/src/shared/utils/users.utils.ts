import * as moment from 'moment';
import { User } from 'src/applicants/entities/applicant.entity';

export function sanitizeUser(user: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...safeUser } = user;
  return safeUser;
}

function generateRandomTextAndLength() {
  const minLength = 7;
  const maxLength = 15;
  const length = Math.floor(
    Math.random() * (maxLength - minLength + 1) + minLength,
  );

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return { text: randomText, length };
}

export function appendRandomTextAndLength(parameter: string) {
  const { text, length } = generateRandomTextAndLength();
  return `${text}/${parameter}%${length}`;
}

export const getMoment = (duration: number) => {
  const currentTime = moment();

  const futureTime = currentTime.add(duration, 'minutes');

  const expiresIn = futureTime.valueOf();

  return expiresIn;
};
