import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProgramsImageTable1695943005562
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'programs_image',
        columns: [
          {
            name: 'id',
            type: 'varchar', // Use varchar type for UUID
            isPrimary: true,
            default: 'uuid()', // Generate UUIDs using MySQL's uuid() function
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'programId',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Programs',
            columnNames: ['programId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'programs',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('programs_image', true, true);
  }
}
