import 'reflect-metadata';
import { CreatePlayerService } from './CreatePlayerService';
import { PlayersRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/PlayersRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let createPlayerService: CreatePlayerService;
let playersRepositoryInMemory: PlayersRepositoryInMemory;

describe('Create Player', () => {
	beforeEach(async () => {
		playersRepositoryInMemory = new PlayersRepositoryInMemory();
		createPlayerService = new CreatePlayerService(playersRepositoryInMemory);
	});
	it('Should be able to create a new player', async () => {
		const player = await createPlayerService.execute({
			playerId: 'testPlayer',
			provider: 'testProvider',
		});
		expect(player).toHaveProperty('id');
	});
	it('Should not be able to create a player if playerId already exists', () => {
		expect(async () => {
			await createPlayerService.execute({
				playerId: 'testPlayer',
				provider: 'testProvider',
			});
			await createPlayerService.execute({
				playerId: 'testPlayer',
				provider: 'testProvider',
			});
		}).rejects.toBeInstanceOf(AppResponse);
	});
});
