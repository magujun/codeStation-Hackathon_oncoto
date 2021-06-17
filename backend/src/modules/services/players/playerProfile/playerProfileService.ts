import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '../../../infra/typeorm/repositories/IPlayersRepository';
import { IPlayerProfileResponseDTO } from '../../../infra/DTOs/IPlayerProfileResponseDTO';
import { PlayerProfileMap } from '../../../infra/mapper/playerProfileMap';

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