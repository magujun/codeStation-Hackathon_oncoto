import 'reflect-metadata';
import { UpdateRankingService } from './UpdateRankingService';
import { RankingsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/RankingsRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let updateRankingService: UpdateRankingService;
let rankingsRepositoryInMemory: RankingsRepositoryInMemory;

describe('Ranking update test', () => {
	beforeEach(() => {
		rankingsRepositoryInMemory = new RankingsRepositoryInMemory();
		updateRankingService = new UpdateRankingService(rankingsRepositoryInMemory);
	});
	it('Should be able to create a new ranking', async () => {
		const ranking = await updateRankingService.execute({
			rankingId: 'testRanking',
			provider: 'testProvider',
		});
		expect(ranking).toHaveProperty('id');
	});
	it('Should not be able to create a ranking if rankingId already exists', () => {
		expect(async () => {
			await updateRankingService.execute({
				rankingId: 'testRanking',
				provider: 'testProvider',
			});
			await updateRankingService.execute({
				rankingId: 'testRanking',
				provider: 'testProvider',
			});
		}).rejects.toBeInstanceOf(AppResponse);
	});
});
