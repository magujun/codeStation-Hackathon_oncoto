import { IRankingDTO } from '../../DTOs/IRankingDTO';
import { Ranking } from '../entities/Ranking';

interface IRankingsRepository {
	update({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void>;
	list(): Promise<Ranking[]>;
}

export { IRankingsRepository };
