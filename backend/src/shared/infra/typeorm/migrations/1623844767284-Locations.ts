import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Locations1623844767284 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'locations',
				columns: [
					{
						name: 'plus_code',
						type: 'varchar',
						isPrimary: true,
					},
					{
						name: 'coordinates',
						type: 'varchar',
					},
					{
						name: 'countryCode',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'country',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'street_address',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'postal_code',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'point_of_interest',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'natural_feature',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'route',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'park',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'airport',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'intersection',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'political',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'administrative_area_level_1',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'administrative_area_level_2',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'administrative_area_level_3',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'administrative_area_level_4',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'administrative_area_level_5',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'colloquial_area',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'locality',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'sublocality',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'neighborhood',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'premise',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'subpremise',
						type: 'varchar',
						isNullable: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('locations');
	}
}
