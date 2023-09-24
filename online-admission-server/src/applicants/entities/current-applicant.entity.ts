import { Role } from 'src/shared/interfaces/enums/roles.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Role, // Use the Role enum
    default: Role.USER, // Set a default role if needed
  })
  role: Role; // The role property is of type Role

  @Column({ default: true })
  isActive: boolean;
}
