import 'reflect-metadata';
import { CreateGameService } from './CreateGameService';
import { GamesRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/GamesRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let createGameService: CreateGameService;
let gamesRepositoryInMemory: GamesRepositoryInMemory;

describe('Create a game record', () => {
	beforeEach(() => {
		gamesRepositoryInMemory = new GamesRepositoryInMemory();
		createGameService = new CreateGameService(gamesRepositoryInMemory);
	});
	it('Should be able to create a new game record', async () => {
		const game = await createGameService.execute({
			player_id: 'testPlayer',
			level: 'testLevel',
			elapsedTime: 0,
			locationOrigin: '1,1',
			locationMarked: '2,1',
			distance: 0,
			score: 0,
		});
		expect(game).toHaveProperty('id');
	});
});
