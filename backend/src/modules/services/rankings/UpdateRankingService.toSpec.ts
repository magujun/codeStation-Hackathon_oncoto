import 'reflect-metadata';
import { UpdateRankingService } from './UpdateRankingService';
import { RankingsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/RankingsRepositoryInMemory';

let updateRankingService: UpdateRankingService;
let rankingsRepositoryInMemory: RankingsRepositoryInMemory;

describe('Ranking list update', () => {
	beforeEach(() => {
		rankingsRepositoryInMemory = new RankingsRepositoryInMemory();
		updateRankingService = new UpdateRankingService(rankingsRepositoryInMemory);
	});
	it('Should be able update the rankings when recording a new game', async () => {
		const ranking = await updateRankingService.execute({
			player_id: 'testPlayer',
			game_id: 'testGame',
			level: 'testLevel',
			score: 0,
			avatar: 'testAvatar',
			nick: 'testNick',
		});
		expect(ranking).toHaveProperty('id');
	});
});
