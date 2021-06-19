import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

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
    await queryRunner.createForeignKey(
      "productions",
       new TableForeignKey({
        name: "FKGameHistoryPlayed",
        referencedTableName: "players",
        referencedColumnNames: ["id"],
        columnNames: ["player_id"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
   })
  );
  }

	public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('games', 'FKGameHistoryPlayed');
		await queryRunner.dropTable('games');
	}
}
