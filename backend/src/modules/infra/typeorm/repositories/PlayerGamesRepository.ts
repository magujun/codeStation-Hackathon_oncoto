import { Game } from '@src/modules/infra/typeorm/entities/Game';
import { IPlayerGamesRepository } from '@src/modules/infra/typeorm/repositories/IPlayerGamesRepository';
import { AppError } from '@src/shared/errors/AppError';
import { getRepository, Repository, Equal } from 'typeorm';

class PlayerGamesRepository implements IPlayerGamesRepository {
	private repository: Repository<Game>;

	constructor() {
		this.repository = getRepository(Game);
	}
	// SELECT * FROM games WHERE playerId = {playerId}
	async listByPlayerId(player_id: string): Promise<Game[]> {
		console.log('Repository player_id: ', player_id);
		const playerGames = await this.repository.find({ player_id });
		console.log('Repository: ', playerGames);
		if (playerGames.length === 0) {
			throw new AppError('No games found for this player', 404);
		}
		return playerGames;
	}
}
export { PlayerGamesRepository };
