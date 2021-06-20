import { IRankingDTO } from '../../DTOs/IRankingDTO';
import { IRankingResponseDTO } from '../../DTOs/IRankingResponseDTO';

interface IRankingsRepository {
	update({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void>;
	list(): Promise<IRankingResponseDTO[]>;
}

export { IRankingsRepository };
