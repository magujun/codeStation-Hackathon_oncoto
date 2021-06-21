import { inject, injectable } from 'tsyringe';

import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';

@injectable()
class UpdateRankingService {
	constructor(
		@inject('RankingsRepository')
		private rankingsRepository: IRankingsRepository
	) {}
	async execute({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void> {
		await this.rankingsRepository.update({
			game_id,
			player_id,
			level,
			score,
			nick,
			avatar,
		});
	}
}

export { UpdateRankingService };
