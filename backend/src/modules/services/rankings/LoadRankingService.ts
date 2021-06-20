import { inject, injectable } from 'tsyringe';

import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';

@injectable()
class LoadRankingService {
	constructor(
		@inject('RankingsRepository')
		private gamesRepository: IRankingsRepository
	) {}
	async execute({
		gameId,
		playerId,
		level,
		score,
	}: ILoadRankingDTO): Promise<void> {
		await this.gamesRepository.load({
			gameId,
			playerId,
			level,
			score,
		});
	}
}

export { LoadRankingService };
