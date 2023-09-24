import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Profile } from './applicant.profile.enity';
import { Role } from 'src/shared/interfaces/enums/roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  username: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  readonly password: string;

  @Column({
    type: 'enum',
    enum: Role, // Use the Role enum
    default: Role.USER, // Set a default role if needed
  })
  role: Role; // The role property is of type Role

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true }) // Make it nullable if it's not always present
  refreshToken: string;

  @Column({ nullable: true }) // Make it nullable if it's not always present
  refreshTokenExp: string;

  @OneToOne(() => Profile) // Define a one-to-one relationship
  @JoinColumn() // Use @JoinColumn to specify the foreign key column
  profile: Profile; // The name of the property represents the related profile
}
