import { getRepository, Repository } from 'typeorm';

import { ICreateGameDTO } from '@src/modules/infra/DTOs/ICreateGameDTO';
import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { Game } from '../../entities/Game';

class GamesRepositoryInMemory implements IGamesRepository {
	games: Game[] = [];

	async create({
		player_id,
		level,
		elapsedTime,
		locationOrigin,
		locationMarked,
		distance,
		score,
	}: ICreateGameDTO): Promise<Game> {
		const game = new Game();
		Object.assign(game, {
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
		this.games.push(game);
		return game;
	}

	async findGameById(id: string): Promise<Game> {
		return this.games.find((game) => game.id === id);
	}

	async list(): Promise<Game[]> {
		return this.games;
	}
}
export { GamesRepositoryInMemory };
