import { getRepository, Repository } from 'typeorm';

import { ICreatePlayerDTO } from '@src/modules/infra/DTOs/ICreatePlayerDTO';
import { IPlayersRepository } from '@src/modules/infra/typeorm/repositories/IPlayersRepository';
import { Player } from '../entities/Player';

class PlayersRepository implements IPlayersRepository {
	private repository: Repository<Player>;

	constructor() {
		this.repository = getRepository(Player);
	}
	async create({
		playerId,
		provider,
		nick,
		avatar,
	}: ICreatePlayerDTO): Promise<void> {
		const player = this.repository.create({
			playerId,
			provider,
			nick,
			avatar,
		});
		await this.repository.save(player);
	}
	async findByPlayerId(playerId: string): Promise<Player> {
		// SELECT * FROM players WHERE playerId = "playerId" limit 1
		const player = await this.repository.findOne({ playerId });
		return player;
	}
	async findByNick(nick: string): Promise<Player> {
		// SELECT * FROM players WHERE nick = "nick" limit 1
		const player = await this.repository.findOne({ nick });
		return player;
	}
	// SELECT * FROM players
	async list(): Promise<Player[]> {
		const players = await this.repository.find();
		return players;
	}
}
export { PlayersRepository };
