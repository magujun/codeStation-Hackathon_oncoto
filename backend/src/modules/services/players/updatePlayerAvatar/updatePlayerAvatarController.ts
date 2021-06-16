import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdatePlayerAvatarService } from './updatePlayerAvatarService';

class UpdatePlayerAvatarController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.player;
		const avatar_file = request.file.filename;

		const updatePlayerAvatarService = container.resolve(
			UpdatePlayerAvatarService
		);
		await updatePlayerAvatarService.execute({ player_id: id, avatar_file });
		return response.status(204).send();
	}
}

export { UpdatePlayerAvatarController };

//Receber arquivo
