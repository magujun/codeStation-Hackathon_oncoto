import { inject, injectable } from 'tsyringe';

import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { ICreateGameDTO } from '@src/modules/infra/DTOs/ICreateGameDTO';

@injectable()
class CreateGameService {
	constructor(
		@inject('GamesRepository')
		private gamesRepository: IGamesRepository
	) {}
	async execute({
		player_id,
		level,
		elapsedTime,
		locationOrigin,
		locationMarked,
		distance,
		score,
	}: ICreateGameDTO): Promise<void> {
		await this.gamesRepository.create({
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
	}
}

export { CreateGameService };
