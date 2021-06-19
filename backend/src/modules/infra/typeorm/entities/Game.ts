import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('games')
class Game {
	@PrimaryColumn()
	id?: string;
	@Column()
	player_id: string;
	@Column()
	level: string;
	@Column()
	elapsedTime: number;
	@Column()
	locationOrigin: string;
	@Column()
	locationMarked: string;
	@Column()
	distance: number;
	@Column()
	score: number;
	@CreateDateColumn()
	gameDate: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}
export { Game };
