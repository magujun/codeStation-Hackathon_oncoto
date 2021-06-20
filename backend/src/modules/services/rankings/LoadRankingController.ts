import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoadRankingService } from './LoadRankingService';

class LoadRankingController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { game_id, player_id, level, score } = request.body;
		const loadRankingService = container.resolve(LoadRankingService);
		await loadRankingService.execute({
			game_id,
			player_id,
			level,
			score,
		});
		return response;
	}
}

export { LoadRankingController };
