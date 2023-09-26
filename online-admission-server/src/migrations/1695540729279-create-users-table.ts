import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1695540729279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar', // Use varchar type for UUID
            isPrimary: true,
            default: 'uuid()', // Generate UUIDs using MySQL's uuid() function
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'role',
            type: 'enum',
            enum: ['USER', 'ADMIN'], // Update with your Role enum values
            default: 'USER',
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
            name: 'isActive',
            type: 'boolean',
            default: true,
          },
          {
            name: 'refreshToken',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'refreshTokenExp',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'profileId',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Profile_User',
            columnNames: ['profileId'],
            referencedTableName: 'profiles',
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
    queryRunner.dropTable('users');
  }
}
