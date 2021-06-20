import { getRepository, Repository } from 'typeorm';

import { IRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';
import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { Ranking } from '../entities/Ranking';
import { Player } from '../entities/Player';

interface PlayerData {
	nick: string;
	avatar: string;
}

class RankingsRepository implements IRankingsRepository {
	private repository: Repository<Ranking>;
	private playerRepository: Repository<Player>;

	constructor() {
		this.repository = getRepository(Ranking);
		this.playerRepository = getRepository(Player);
	}

	async update({
		game_id,
		player_id,
		level,
		score,
		nick,
		avatar,
	}: IRankingDTO): Promise<void> {
		const currentRanking = await this.repository.find();
		console.log('Current repository ranking: ', currentRanking);
		const [playerData] = await this.playerRepository.findByIds([player_id], {
			select: ['avatar', 'nick'],
		});
		console.log('playerData repository ranking: ', playerData);
		if (currentRanking.length < 2) {
			const ranking = this.repository.create({
				game_id,
				player_id,
				level,
				score,
				nick: playerData.nick,
				avatar: playerData.avatar,
			});
			await this.repository.save(ranking);
		} else {
			const sortedRanking = currentRanking.sort(
				(element1, element2) => element1.score - element2.score
			);
			console.log('Sorted repository ranking: ', sortedRanking);
			if (sortedRanking.length < 50) {
				const ranking = this.repository.create({
					game_id,
					player_id,
					level,
					score,
					nick: playerData.nick,
					avatar: playerData.avatar,
				});
				await this.repository.save(ranking);
			} else if (score > sortedRanking[-1].score) {
				this.repository.delete(sortedRanking[-1].id);
				const ranking = this.repository.create({
					game_id,
					player_id,
					level,
					score,
					nick: playerData.nick,
					avatar: playerData.avatar,
				});
				await this.repository.save(ranking);
			}
		}
	}
	// SELECT * FROM rankings
	async list(): Promise<Ranking[]> {
		const rankings = await this.repository.find();
		return rankings;
	}
}
export { RankingsRepository };
