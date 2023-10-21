// import { Programmes } from 'src/programmes/entities/programmes.entity';
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

// @Entity('programs_image')
// export class ProgramsImage {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   type: string;

//   @Column({ nullable: false })
//   filename: string;

//   @Column({ nullable: false })
//   originalname: string;

//   @Column({ nullable: true })
//   localFilePath: string; // Store the path to the image file on the local disk

//   @ManyToOne(() => Programmes, (program) => program.images)
//   program: Programmes;
// }

import { Programmes } from 'src/programmes/entities/programmes.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('programs_image')
export class ProgramsImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  driveid: string;

  @Column({ nullable: false })
  filename: string;

  @ManyToOne(() => Programmes, (program) => program.images)
  program: Programmes;
}
