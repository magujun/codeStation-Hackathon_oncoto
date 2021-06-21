import { getRepository, Repository } from 'typeorm';

import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';
import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { Ranking } from '../entities/Ranking';
import { Player } from '../entities/Player';
import { IRankingResponseDTO } from '../../DTOs/IRankingResponseDTO';

interface PlayerData {
	nick: string;
	avatar: string;
}

class RankingsRepositoryInMemory implements IRankingsRepository {
	rankings: Ranking[] = [];
	rankings: Ranking[] = [];

	async update({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void> {
		const currentRanking = await this.repository.find();
		// console.log('Current repository ranking: ', currentRanking);
		const [playerData] = await this.playerRepositoryInMemory.findByIds(
			[player_id],
			{
				select: ['avatar', 'nick'],
			}
		);
		// console.log('playerData repositoryInMemory ranking: ', playerData);
		if (currentRanking.length < 2) {
			const ranking = this.repositoryInMemory.create({
				game_id,
				player_id,
				level,
				score,
				nick: playerData.nick,
				avatar: playerData.avatar,
			});
			await this.repositoryInMemory.save(ranking);
		} else {
			const sortedRanking = currentRanking.sort(
				(element1, element2) => element2.score - element1.score
			);
			console.log('Sorted repositoryInMemory ranking: ', sortedRanking);
			if (sortedRanking.length < 50) {
				const ranking = this.repositoryInMemory.create({
					game_id,
					player_id,
					level,
					score,
					nick: playerData.nick,
					avatar: playerData.avatar,
				});
				await this.repositoryInMemory.save(ranking);
			} else if (score > sortedRanking[-1].score) {
				this.repositoryInMemory.delete(sortedRanking[-1].id);
				const ranking = this.repositoryInMemory.create({
					game_id,
					player_id,
					level,
					score,
					nick: playerData.nick,
					avatar: playerData.avatar,
				});
				await this.repositoryInMemory.save(ranking);
			}
		}
	}
	// SELECT * FROM rankings
	async list(): Promise<IRankingResponseDTO[]> {
		const rankings = await this.repositoryInMemory.find();
		const sortedRanking = rankings
			.sort((element1, element2) => element2.score - element1.score)
			.map((element, index) => Object.assign(element, { position: index + 1 }));
		return sortedRanking;
	}
}
export { RankingsRepositoryInMemory };
