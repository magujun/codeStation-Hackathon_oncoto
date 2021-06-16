import { ICreatePlayerDTO } from '../DTOs/ICreatePlayerDTO';
import { Player } from '../../infra/typeorm/entities/Player';

interface IPlayersRepository {
	create({ playerId, provider }: ICreatePlayerDTO): Promise<void>;
	findByNick(nick: string): Promise<Player>;
	findByPlayerId(playerId: string): Promise<Player>;
	list(): Promise<Player[]>;
}

export { IPlayersRepository };
