import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePlayerService } from './CreatePlayerService';

class CreatePlayerController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { playerId, provider, nick, avatar } = request.body;
		const createPlayerService = container.resolve(CreatePlayerService);
		const player = await createPlayerService.execute({
			playerId,
			provider,
			nick,
			avatar,
		});
		return response.status(201).json(player).send();
	}
}

export { CreatePlayerController };
