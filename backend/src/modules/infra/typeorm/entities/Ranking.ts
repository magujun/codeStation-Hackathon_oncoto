import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './Game';
import { Player } from './Player';

@Entity('rankings')
class Ranking {
	@PrimaryColumn()
	id: string;
	@Column()
	game_id: string;
	@OneToOne(() => Game)
	@JoinColumn({ name: 'game_id' })
	@Column()
	player_id: string;
	@ManyToOne(() => Player)
	@JoinColumn({ name: 'player_id' })
	@Column()
	level: string;
	@Column()
	score: number;
	@Column()
	nick: string;
	@Column()
	avatar: string;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Ranking };
