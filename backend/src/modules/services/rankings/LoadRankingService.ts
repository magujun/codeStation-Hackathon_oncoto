import { inject, injectable } from 'tsyringe';

import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';

@injectable()
class LoadRankingService {
	constructor(
		@inject('RankingsRepository')
		private rankingsRepository: IRankingsRepository
	) {}
	async execute(): Promise<IRankingDTO[]> {
		const rankings = await this.rankingsRepository.list();
		return rankings;
	}
}

export { LoadRankingService };
