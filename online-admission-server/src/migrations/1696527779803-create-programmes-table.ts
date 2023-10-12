import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProgrammesTable1696527779803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'programmes',
        columns: [
          {
            name: 'id',
            type: 'varchar', // Use varchar type for UUID
            isPrimary: true,
            default: 'uuid()', // Generate UUIDs using MySQL's uuid() function
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'number',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'programsImageId',
            type: 'varchar',
            // isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Programs_Image',
            columnNames: ['programsImageId'],
            referencedTableName: 'programs_image',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE', // Specify the behavior on profile deletion
            onUpdate: 'CASCADE', // Specify the behavior on profile update
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key constraint first
    //   const table = await queryRunner.getTable('programs');
    //   const foreignKey = table.foreignKeys.find(
    //     (fk) => fk.columnNames.indexOf('id') !== -1,
    //   );
    //   if (foreignKey) {
    //     await queryRunner.dropForeignKey('programs', foreignKey);
    //   }

    //   await queryRunner.dropTable('programs');
    // }
    await queryRunner.dropTable('programmes', true, true);
  }
}
