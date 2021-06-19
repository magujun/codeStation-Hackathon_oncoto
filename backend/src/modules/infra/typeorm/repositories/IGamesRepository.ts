import { ICreateGameDTO } from '../../DTOs/ICreateGameDTO';
import { Game } from '../entities/Game';

interface IGamesRepository {
	create({ playerId, level, elapsedTime, locationOrigin, locationMarked, distance, score }: ICreateGameDTO): Promise<void>;
  list(): Promise<Game[]>;
}

export { IGamesRepository };
