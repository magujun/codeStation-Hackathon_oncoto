import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToMany,
	PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './Game';
import { Player } from './Player';

@Entity('ranking')
class Ranking {
	@PrimaryColumn()
	id: string;
	@Column()
	game_id: string;
	@ManyToMany(() => Game)
	@JoinColumn({ name: 'game_id' })
	@Column()
	player_id: string;
	@ManyToMany(() => Player)
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
