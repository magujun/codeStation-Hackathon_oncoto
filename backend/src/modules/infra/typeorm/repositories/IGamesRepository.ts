import { ICreateGameDTO } from '../../DTOs/ICreateGameDTO';
import { Game } from '../entities/Game';

interface IGamesRepository {
	create({
		player_id,
		level,
		elapsedTime,
		locationOrigin,
		locationMarked,
		distance,
		score,
	}: ICreateGameDTO): Promise<void>;
	findGameById(id: string): Promise<Game>;
	list(): Promise<Game[]>;
}

export { IGamesRepository };
