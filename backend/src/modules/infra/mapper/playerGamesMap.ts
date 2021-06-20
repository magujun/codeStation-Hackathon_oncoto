import { classToClass } from 'class-transformer';

import { Game } from '@src/modules/infra/typeorm/entities/Game';
import { IPlayerGamesResponseDTO } from '../DTOs/IPlayerGamesResponseDTO';

class PlayerGamesMap {
	static toDTO({
		id,
		player_id,
		level,
		score,
		elapsedTime,
		gameDate,
	}: Game): IPlayerGamesResponseDTO {
		const games = classToClass({
			id,
			player_id,
			level,
			score,
			elapsedTime,
			gameDate,
		});
		return games;
	}
}

export { PlayerGamesMap };
