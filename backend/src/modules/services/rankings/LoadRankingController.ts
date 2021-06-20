import { json, Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoadRankingService } from './LoadRankingService';

class LoadRankingController {
	async handle(request: Request, response: Response): Promise<Response> {
		const loadRankingService = container.resolve(LoadRankingService);
		const rankings = await loadRankingService.execute();
		return response.json(rankings);
	}
}

export { LoadRankingController };
