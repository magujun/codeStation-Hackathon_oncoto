import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Expose } from 'class-transformer';

@Entity('players')
class Player {
	@PrimaryColumn()
	id?: string;
	@Column()
	nick?: string;
	@Column()
	playerId: string;
	@Column()
	provider: string;
	@Column()
	avatar: string;
	@CreateDateColumn()
	createDate: Date;
	@CreateDateColumn()
	updateDate: Date;
	@Expose({ name: 'avatar_url' })
	avatar_url(): string {
		return `${process.env.API_URL}/avatar/${this.avatar}`;
	}

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