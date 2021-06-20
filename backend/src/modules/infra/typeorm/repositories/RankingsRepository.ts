import { getRepository, Repository } from 'typeorm';

import { IUpdateRankingDTO } from '@src/modules/infra/DTOs/IRankingDTO';
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
		position,
	}: IUpdateRankingDTO): Promise<void> {
		if ((await this.repository.count()) < 50) {
			const [player] = await this.playerRepository.findByIds([player_id], {
				select: ['avatar', 'nick'],
			});
			this.repository.create({
				game_id,
				player_id,
				level,
				score,
				nick,
				avatar,
				position,
			});
		}
		const ranking = this.repository.save({
			game_id,
			player_id,
			level,
			score,
		});
		await this.repository.save(ranking);
	}

	// SELECT * FROM rankings
	async list(): Promise<Ranking[]> {
		const rankings = await this.repository.find();
		return rankings;
	}
}
export { RankingsRepository };
