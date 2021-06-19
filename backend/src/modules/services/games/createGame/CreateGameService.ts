import { inject, injectable } from 'tsyringe';

import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { ICreateGameDTO } from '@src/modules/infra/DTOs/ICreateGameDTO';
import { AppError } from '@src/shared/errors/AppError';

@injectable()
class CreateGameService {
	constructor(
		@inject('GamesRepository')
		private gamesRepository: IGamesRepository
	) {}
	async execute({ playerId, level, elapsedTime, locationOrigin, locationMarked, distance, score }: ICreateGameDTO): Promise<void> {

		await this.gamesRepository.create({
      playerId,
      level,
      elapsedTime,
      locationOrigin,
      locationMarked,
      distance,
      score
		});
	}
}

export { CreateGameService };
