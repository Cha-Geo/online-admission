import { Document } from 'mongoose';

export interface Profile extends Document {
  username: string;

  first_name: string;

  last_name: string;

  contact_no: string;

  image: string;

  area: string;

  city: string;

  state: string;

  pinCode: string;
}
