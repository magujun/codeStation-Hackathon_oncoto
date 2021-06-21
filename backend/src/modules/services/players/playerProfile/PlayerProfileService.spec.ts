import 'reflect-metadata';
import { PlayerProfileService } from './PlayerProfileService';
import { PlayersRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/PlayersRepositoryInMemory';
import { CreatePlayerService } from '../createPlayer/CreatePlayerService';
import { AppError } from '@src/shared/errors/AppError';

let createPlayerService: CreatePlayerService;
let playersRepositoryInMemory: PlayersRepositoryInMemory;
let playerProfileService: PlayerProfileService;

describe('Show player profile', () => {
	beforeEach(async () => {
		playersRepositoryInMemory = new PlayersRepositoryInMemory();
		createPlayerService = new CreatePlayerService(playersRepositoryInMemory);
		playersRepositoryInMemory = new PlayersRepositoryInMemory();
		playerProfileService = new PlayerProfileService(playersRepositoryInMemory);
	});
	// it('Should be able to return a player profile', async () => {
	// 	await createPlayerService.execute({
	// 		playerId: 'testPlayer',
	// 		provider: 'testProvider',
	// 	});
	// 	const playerProfile = await playerProfileService.execute('testPlayer');
	// 	expect(playerProfile).toHaveProperty('id');
	// });
	it("Should not be able to return a player profile if player doesn't exist", () => {
		expect(async () => {
			await playerProfileService.execute('invalidTestPlayer');
		}).rejects.toBeInstanceOf(AppError);
	});
});
