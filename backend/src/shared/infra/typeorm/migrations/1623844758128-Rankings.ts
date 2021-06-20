import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Rankings1623844758128 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'rankings',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'game_id',
						type: 'uuid',
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
						name: 'score',
						type: 'varchar',
					},
					{
						name: 'nick',
						type: 'varchar',
					},
					{
						name: 'avatar',
						type: 'varchar',
					},
				],
				foreignKeys: [
					{
						name: 'FKPlayerRanking',
						referencedTableName: 'players',
						referencedColumnNames: ['id'],
						columnNames: ['player_id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL',
					},
					{
						name: 'FKGameRanking',
						referencedTableName: 'games',
						referencedColumnNames: ['id'],
						columnNames: ['game_id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('rankings');
	}
}
