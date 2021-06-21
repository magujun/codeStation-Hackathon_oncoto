import 'reflect-metadata';
import { CreateGameService } from './CreateGameService';
import { GamesRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/GamesRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let createGameService: CreateGameService;
let gamesRepositoryInMemory: GamesRepositoryInMemory;

describe('Create Game', () => {
	beforeEach(() => {
		gamesRepositoryInMemory = new GamesRepositoryInMemory();
		createGameService = new CreateGameService(gamesRepositoryInMemory);
	});
	it('Should be able to create a new game', async () => {
		const game = await createGameService.execute({
			gameId: 'testGame',
			provider: 'testProvider',
		});
		expect(game).toHaveProperty('id');
	});
	it('Should not be able to create a game if gameId already exists', () => {
		expect(async () => {
			await createGameService.execute({
				gameId: 'testGame',
				provider: 'testProvider',
			});
			await createGameService.execute({
				gameId: 'testGame',
				provider: 'testProvider',
			});
		}).rejects.toBeInstanceOf(AppResponse);
	});
});
