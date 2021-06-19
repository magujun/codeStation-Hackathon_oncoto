import { getRepository, Repository } from 'typeorm';

import { ICreateGameDTO } from '@src/modules/infra/DTOs/ICreateGameDTO';
import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { Game } from '../entities/Game';

class GamesRepository implements IGamesRepository {
	private repository: Repository<Game>;

	constructor() {
		this.repository = getRepository(Game);
	}
	async findGameById(player_id: string): Promise<Game> {
		const game = await this.repository.findOne({
      where: { player_id },
      relations: ["player"]
    });
		return game;
	}
	async create({
		player_id,
		level,
		elapsedTime,
		locationOrigin,
		locationMarked,
		distance,
		score,
	}: ICreateGameDTO): Promise<void> {
		const game = this.repository.create({
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
		await this.repository.save(game);
	}

	// SELECT * FROM games
	async list(): Promise<Game[]> {
		const games = await this.repository.find();
		return games;
	}
}
export { GamesRepository };
