import { Game } from '@src/modules/infra/typeorm/entities/Game';
import { inject, injectable } from 'tsyringe';

import { IGamesRepository } from '../../../infra/typeorm/repositories/IGamesRepository';

@injectable()
class FindByGameIdService {
	constructor(
		@inject('GamesRepository')
		private gamesRepository: IGamesRepository
	) {}
	async execute(player_id: string): Promise<Game> {
		const game = await this.gamesRepository.findGameById(player_id);
		return game;
	}
}

export { FindByGameIdService };
