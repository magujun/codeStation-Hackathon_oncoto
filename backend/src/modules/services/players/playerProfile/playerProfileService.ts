import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '../../../infra/typeorm/repositories/IPlayersRepository';
import { IPlayerProfileResponseDTO } from '../../../infra/DTOs/IPlayerProfileResponseDTO';
import { PlayerProfileMap } from '../../../infra/mapper/playerProfileMap';
import { AppError } from '@src/shared/errors/AppError';

@injectable()
class PlayerProfileService {
	constructor(
		@inject('PlayersRepository')
		private playersRepository: IPlayersRepository
	) {}
	async execute(playerId: string): Promise<IPlayerProfileResponseDTO> {
		const player = await this.playersRepository.findByPlayerId(playerId);
		if (!player) {
			throw new AppError('User does not exist!', 400)
		}
		return PlayerProfileMap.toDTO(player);
	}
}

export { PlayerProfileService };
