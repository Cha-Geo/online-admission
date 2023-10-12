import { Programme } from 'src/programmes/entities/programme.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ProgramsImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column({ nullable: false })
  filename: string;

  // @Column('bytea', { nullable: true })
  // data: Buffer; // Store the image data as a Buffer

  @Column({ nullable: true })
  localFilePath: string; // Store the path to the image file on the local disk

  @ManyToOne(() => Programme, (program) => program.images)
  program: Programme;
}
