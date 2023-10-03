import { Programme } from 'src/programmes/entities/programme.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ProgramsImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Programme, (program) => program.images)
  program: Programme;
}
