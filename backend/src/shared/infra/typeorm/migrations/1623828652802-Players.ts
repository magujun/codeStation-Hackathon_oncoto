import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Players1623828652802 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'players',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'playerId',
						type: 'varchar',
					},
					{
						name: 'provider',
						type: 'varchar',
					},
					{
						name: 'nick',
						type: 'varchar',
					},
					{
						name: 'avatar',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'createDate',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updateDate',
						type: 'timestamp',
						isNullable: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('players');
	}
}
