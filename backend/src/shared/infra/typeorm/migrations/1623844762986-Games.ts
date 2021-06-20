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
						type: 'uuid',
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
				foreignKeys: [
					{
						name: 'FKPlayerGame',
						referencedTableName: 'players',
						referencedColumnNames: ['id'],
						columnNames: ['player_id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('games');
	}
}
