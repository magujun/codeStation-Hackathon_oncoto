import { IPlayersRepository } from '../IPlayersRepository';
import { ICreatePlayerDTO } from '@src/modules/infra/DTOs/ICreatePlayerDTO';
import { Player } from '../../entities/Player';

class PlayersRepositoryInMemory implements IPlayersRepository {
	players: Player[] = [];

	async create({
		playerId,
		provider,
		id,
		nick,
		avatar,
	}: ICreatePlayerDTO): Promise<void> {
		const player = new Player();
		Object.assign(player, {
			playerId,
			provider,
			id,
			nick,
			avatar,
		});
		this.players.push(player);
	}

	async findByPlayerId(playerId: string): Promise<Player> {
		return this.players.find((player) => player.playerId === playerId);
	}
	async findByNick(nick: string): Promise<Player> {
		return this.players.find((player) => player.nick === nick);
	}
	async list(): Promise<Player[]> {
		return this.players;
	}
}

export { PlayersRepositoryInMemory };
