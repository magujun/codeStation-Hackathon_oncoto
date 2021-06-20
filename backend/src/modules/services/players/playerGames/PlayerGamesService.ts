import { inject, injectable } from 'tsyringe';

import { IPlayerGamesRepository } from '../../../infra/typeorm/repositories/IPlayerGamesRepository';
import { IPlayerGamesResponseDTO } from '@src/modules/infra/DTOs/IPlayerGamesResponseDTO';
import { PlayerGamesMap } from '@src/modules/infra/mapper/playerGamesMap';

@injectable()
class PlayerGamesService {
	constructor(
		@inject('PlayerGamesRepository')
		private playerGamesRepository: IPlayerGamesRepository
	) {}
	async execute(player_id: string): Promise<IPlayerGamesResponseDTO[]> {
		const games = await this.playerGamesRepository.listByPlayerId(player_id);
		console.log('Service: ', games);
		const playerGames = games.map((element) => PlayerGamesMap.toDTO(element));
		console.log('Return :', playerGames);
		return playerGames;
	}
}

export { PlayerGamesService };
