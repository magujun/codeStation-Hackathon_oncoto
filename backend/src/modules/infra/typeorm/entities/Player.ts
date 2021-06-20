import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	OneToMany,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './Game';

@Entity('players')
class Player {
	@PrimaryColumn()
	id?: string;
	@Column()
	playerId: string;
	@Column()
	provider: string;
	@Column()
	nick?: string;
	@Column()
	avatar?: string;
	@CreateDateColumn()
	createDate: Date;
	@CreateDateColumn()
	updateDate?: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
		if (!this.nick) {
			this.nick = this.playerId;
		}
	}
}

export { Player };
