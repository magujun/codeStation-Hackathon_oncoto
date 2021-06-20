import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateRankingService } from '../../rankings/UpdateRankingService';
import { CreateGameService } from './CreateGameService';

class CreateGameController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		} = request.body;
		const createGameService = container.resolve(CreateGameService);
		await createGameService.execute({
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
		const updateRankingService = container.resolve(UpdateRankingService);
		await updateRankingService.execute({
			game_id: null,
			player_id,
			level,
			score,
			nick: null,
			avatar: null,
			position: null,
		});
		return response
			.status(201)
			.json('New game created and rankings updated!')
			.send();
	}
}

export { CreateGameController };
