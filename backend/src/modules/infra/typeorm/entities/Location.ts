import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('location')
class Location {
	@PrimaryColumn()
	id?: string;
	@Column()
	coordinates: string;
	@Column()
	countryCode: string;
	@CreateDateColumn()
	lastPlayed: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}
export { Location };
