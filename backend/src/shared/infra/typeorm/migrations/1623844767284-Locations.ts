import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Locations1623844767284 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'locations',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'coordinates',
						type: 'varchar',
					},
					{
						name: 'countryCode',
						type: 'varchar',
					},
					{
						name: 'lastPlayed',
						type: 'varchar',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('locations');
	}
}
