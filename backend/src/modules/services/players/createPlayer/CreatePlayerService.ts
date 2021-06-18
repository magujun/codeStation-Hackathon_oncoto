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
			const player = await this.playersRepository.findByPlayerId(playerId);
			throw new AppResponse(player.id);
		}
		await this.playersRepository.create({
			playerId,
			provider,
			nick: playerId,
		});
		return this.playersRepository.findByPlayerId(playerId);
	}
}

export { CreatePlayerService };
