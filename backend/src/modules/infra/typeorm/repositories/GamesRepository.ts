import { getRepository, Repository } from 'typeorm';

import { ICreateGameDTO } from '@src/modules/infra/DTOs/ICreateGameDTO';
import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { Game } from '../entities/Game';

class GamesRepository implements IGamesRepository {
	private repository: Repository<Game>;

	constructor() {
		this.repository = getRepository(Game);
	}

	async create({
		player_id,
		level,
		elapsedTime,
		locationOrigin,
		locationMarked,
		distance,
		score,
	}: ICreateGameDTO): Promise<Game> {
		const game = this.repository.create({
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
		return await this.repository.save(game);
	}

	async findGameById(id: string): Promise<Game> {
		const game = await this.repository.findOne(id);
		return game;
	}

	// SELECT * FROM games
	async list(): Promise<Game[]> {
		const games = await this.repository.find();
		return games;
	}
}
export { GamesRepository };
