import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: null })
  first_name: string;

  @Column({ default: null })
  last_name: string;

  @Column({ default: null })
  contact_no: string;

  @Column({ default: null })
  image: string;

  @Column({ default: null })
  area: string;

  @Column({ default: null })
  city: string;

  @Column({ default: null })
  state: string;

  @Column({ default: null })
  pinCode: string;
}
