import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  contact_no: string;

  @Column()
  image: string;

  @Column()
  area: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  pinCode: string;
}
