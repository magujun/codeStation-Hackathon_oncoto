import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '../../repositories/IPlayersRepository';
import { IPlayerProfileResponseDTO } from '../../DTOs/IPlayerProfileResponseDTO';
import { PlayerProfileMap } from '../../mapper/playerProfileMap';

@injectable()
class PlayerProfileService {
	constructor(
		@inject('PlayersRepository')
		private playersRepository: IPlayersRepository
	) {}
	async execute(id: string): Promise<IPlayerProfileResponseDTO> {
		const player = await this.playersRepository.findByPlayerId(id);
		return PlayerProfileMap.toDTO(player);
	}
}

export { PlayerProfileService };
