import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByGameIdService } from './findByGameIdService';

class FindGameByIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const findByGameIdService = container.resolve(FindByGameIdService);
		const player = await findByGameIdService.execute(id);
		return response.json(player);
	}
}

export { FindGameByIdController };
