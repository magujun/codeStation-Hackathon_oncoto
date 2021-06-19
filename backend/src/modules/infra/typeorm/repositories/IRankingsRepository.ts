import { ICreateRankingDTO } from '../../DTOs/ICreateRankingDTO';
import { Ranking } from '../entities/Ranking';

interface IRankingsRepository {
	create({ gameId, playerId, level, score }: ICreateRankingDTO): Promise<void>;
  list(): Promise<Ranking[]>;
}

export { IRankingsRepository };
