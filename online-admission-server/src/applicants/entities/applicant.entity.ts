import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/shared/interfaces/enums/roles.enum';
import { Profile } from './applicant.profile.enity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role, // Use the Role enum
    default: Role.USER, // Set a default role if needed
  })
  role: Role; // The role property is of type Role

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Profile) // Define a one-to-one relationship
  @JoinColumn() // Use @JoinColumn to specify the foreign key column
  profile: Profile; // The name of the property represents the related profile

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }
}
