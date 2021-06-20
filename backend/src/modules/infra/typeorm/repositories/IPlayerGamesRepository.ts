import { Game } from '../entities/Game';

interface IPlayerGamesRepository {
	listByPlayerId(player_id: string): Promise<Game[]>;
}

export { IPlayerGamesRepository };
