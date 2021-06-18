import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameService } from './CreateGameService';

class CreateGameController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { playerId, level, elapsedTime, locationOrigin, locationMarked, distance, score } = request.body;
		const createGameService = container.resolve(CreateGameService);
		await createGameService.execute({
			playerId,
      level,
      elapsedTime,
      locationOrigin,
      locationMarked,
      distance,
      score
		});
		return response.status(201).json('New game created!').send();
	}
}

export { CreateGameController };
