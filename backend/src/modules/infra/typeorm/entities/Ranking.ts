import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('ranking')
class Ranking {
	@PrimaryColumn()
	gameId: string;
	@Column()
	playerId: string;
	@Column()
	level: string;
	@Column()
	score: number;
	@CreateDateColumn()
	gameDate: Date;
}
export { Ranking };
