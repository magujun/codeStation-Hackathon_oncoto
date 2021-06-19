import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '@src/modules/infra/typeorm/repositories/IPlayersRepository';
import { ICreatePlayerDTO } from '@src/modules/infra/DTOs/ICreatePlayerDTO';
import { Player } from '@src/modules/infra/typeorm/entities/Player';
import { AppResponse } from '@src/shared/responses/AppResponse';

@injectable()
class CreatePlayerService {
	constructor(
		@inject('PlayersRepository')
		private playersRepository: IPlayersRepository
	) {}
	async execute({ playerId, provider }: ICreatePlayerDTO): Promise<Player> {
		const playerAlreadyExists = await this.playersRepository.findByPlayerId(
			playerId
		);
		if (playerAlreadyExists) {
			throw new AppResponse('Player already exists!', 200);
		}
		await this.playersRepository.create({
			playerId,
			provider,
			nick: playerId,
		});
		return await this.playersRepository.findByPlayerId(playerId);
	}
}

export { CreatePlayerService };
