import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoadLocationService } from './LoadLocationService';

class LoadLocationController {
	async handle(request: Request, response: Response): Promise<Response> {
		const loadLocationService = container.resolve(LoadLocationService);
		const location = await loadLocationService.execute();
		console.log(location);
		return response.json(location);
	}
}

export { LoadLocationController };
