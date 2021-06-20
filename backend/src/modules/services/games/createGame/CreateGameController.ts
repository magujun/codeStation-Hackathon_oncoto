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
		const game = await createGameService.execute({
			player_id,
			level,
			elapsedTime,
			locationOrigin,
			locationMarked,
			distance,
			score,
		});
		console.log('Game created: ', game);

		const updateRankingService = container.resolve(UpdateRankingService);
		await updateRankingService.execute({
			game_id: game.id,
			player_id,
			level,
			score,
			nick: null,
			avatar: null,
		});
		return response
			.status(201)
			.json('New game created and rankings updated!')
			.send();
	}
}

export { CreateGameController };
