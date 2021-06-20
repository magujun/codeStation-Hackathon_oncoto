import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameService } from './CreateGameService';
import { UpdateRankingService } from '../rankings/UpdateRankingService';

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
			player_id,
			level,
			elapsedTime,
			score,
		});
		return response.status(201).json('New game created!').send();
	}
}

export { CreateGameController };
