import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRankingService } from './CreateRankingService';

class CreateRankingController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {
      gameId,
			playerId,
			level,
			score,
		} = request.body;
		const createRankingService = container.resolve(CreateRankingService);
		await createRankingService.execute({
      gameId,
			playerId,
			level,
			score,
		});
		return response.status(201).json('New game created!').send();
	}
}

export { CreateRankingController };
