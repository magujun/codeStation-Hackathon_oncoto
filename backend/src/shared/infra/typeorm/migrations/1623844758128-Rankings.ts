import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Rankings1623844758128 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'rankings',
				columns: [
					{
						name: 'gameId',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'playerId',
						type: 'varchar',
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
						name: 'gameDate',
						type: 'timestamp',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('rankings');
	}
}
