import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';
import { IRankingResponseDTO } from '@src/modules/infra/DTOs/IRankingResponseDTO';
import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { Ranking } from '../../entities/Ranking';

class RankingsRepositoryInMemory implements IRankingsRepository {
	rankings: Ranking[] = [];

	async update({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void> {
		const currentRanking = this.rankings;
		const playerData = this.rankings.find(
			(ranking) => ranking.player_id === player_id,
			{ select: ['avatar', 'nick'] }
		);
		if (currentRanking.length < 2) {
			const ranking = new Ranking();
			Object.assign(ranking, {
				game_id,
				player_id,
				level,
				score,
				nick: null,
				avatar: null,
			});
			this.rankings.push(ranking);
		} else {
			const sortedRanking = currentRanking.sort(
				(element1, element2) => element2.score - element1.score
			);
			if (sortedRanking.length < 50) {
				const ranking = new Ranking();
				Object.assign(ranking, {
					game_id,
					player_id,
					level,
					score,
					nick: null,
					avatar: null,
				});
				this.rankings.push(ranking);
			} else if (score > sortedRanking[-1].score) {
				this.rankings.splice(sortedRanking[-1].score);
				const ranking = new Ranking();
				Object.assign(ranking, {
					game_id,
					player_id,
					level,
					score,
					nick: null,
					avatar: null,
				});
				this.rankings.push(ranking);
			}
		}
	}
	async list(): Promise<IRankingResponseDTO[]> {
		const rankings = this.rankings;
		const sortedRanking = rankings
			.sort((element1, element2) => element2.score - element1.score)
			.map((element, index) => Object.assign(element, { position: index + 1 }));
		return sortedRanking;
	}
}
export { RankingsRepositoryInMemory };
