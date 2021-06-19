import { getRepository, Repository } from 'typeorm';

import { ICreateRankingDTO } from '@src/modules/infra/DTOs/ICreateRankingDTO';
import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { Ranking } from '../entities/Ranking';

class RankingsRepository implements IRankingsRepository {
	private repository: Repository<Ranking>;

	constructor() {
		this.repository = getRepository(Ranking);
	}
	async create({
		gameId,
		playerId,
		level,
    score
	}: ICreateRankingDTO): Promise<void> {
		const ranking = this.repository.create({
      gameId,
      playerId,
      level,
      score
		});
		await this.repository.save(ranking);
	}

	// SELECT * FROM rankings
	async list(): Promise<Ranking[]> {
		const rankings = await this.repository.find();
		return rankings;
	}
}
export { RankingsRepository };
