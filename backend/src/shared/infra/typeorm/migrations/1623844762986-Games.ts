import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Games1623844762986 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'games',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'player_id',
						type: 'varchar',
					},
					{
						name: 'level',
						type: 'varchar',
					},
					{
						name: 'elapsedTime',
						type: 'varchar',
					},
					{
						name: 'locationOrigin',
						type: 'varchar',
					},
					{
						name: 'locationMarked',
						type: 'varchar',
					},
					{
						name: 'distance',
						type: 'varchar',
					},
					{
						name: 'score',
						type: 'varchar',
					},
					{
						name: 'gameDate',
						type: 'timestamp',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('games');
	}
}
