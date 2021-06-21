import 'reflect-metadata';
import { PlayerGamesService } from './PlayerGamesService';
import { PlayersRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/PlayersRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let playerGamesService: PlayerGamesService;
let playersRepositoryInMemory: PlayersRepositoryInMemory;

describe('Return a player games', () => {
	beforeEach(() => {
		playersRepositoryInMemory = new PlayersRepositoryInMemory();
		playerGamesService = new PlayerGamesService(playersRepositoryInMemory);
	});
	it("Should be able to return all player's past games", async () => {
		const player = await playerGamesService.execute({
			playerId: 'testPlayer',
		});
		expect(player).toHaveProperty('id');
	});
	it('Should not be able to create a player if playerId already exists', () => {
		expect(async () => {
			await playerGamesService.execute({
				playerId: 'testPlayer',
				provider: 'testProvider',
			});
			await playerGamesService.execute({
				playerId: 'testPlayer',
				provider: 'testProvider',
			});
		}).rejects.toBeInstanceOf(AppResponse);
	});
});
