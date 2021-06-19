import { inject, injectable } from 'tsyringe';

import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { ICreateRankingDTO } from '@src/modules/infra/DTOs/ICreateRankingDTO';

@injectable()
class CreateRankingService {
	constructor(
		@inject('RankingsRepository')
		private gamesRepository: IRankingsRepository
	) {}
	async execute({
		  gameId,
			playerId,
			level,
			score,
	}: ICreateRankingDTO): Promise<void> {
		await this.gamesRepository.create({
			gameId,
			playerId,
			level,
			score,
		});
	}
}

export { CreateRankingService };
