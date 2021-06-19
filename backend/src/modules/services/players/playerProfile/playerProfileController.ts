import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PlayerProfileService } from './playerProfileService';

class PlayerProfileController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { playerId } = request.params;
		const playerProfileService = container.resolve(PlayerProfileService);
		const player = await playerProfileService.execute(playerId);
		return response.json(player);
	}
}

export { PlayerProfileController };
