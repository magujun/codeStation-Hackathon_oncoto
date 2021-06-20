import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PlayerGamesService } from './PlayerGamesService';

class PlayerGamesController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { player_id } = request.params;
		// console.log('Request player_id:', player_id);
		const playerGamesService = container.resolve(PlayerGamesService);
		const games = await playerGamesService.execute(player_id);
		return response.json(games);
	}
}

export { PlayerGamesController };
