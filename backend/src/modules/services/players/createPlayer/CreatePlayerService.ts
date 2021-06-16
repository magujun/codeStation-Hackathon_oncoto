import { inject, injectable } from 'tsyringe';
import { IPlayersRepository } from '@src/modules/infra/typeorm/repositories/IPlayersRepository';
import { ICreatePlayerDTO } from '@src/modules/infra/DTOs/ICreatePlayerDTO';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreatePlayerService {
	constructor(
		@inject('PlayersRepository')
		private playersRepository: IPlayersRepository
	) {}
	async execute({ playerId, provider }: ICreatePlayerDTO): Promise<void> {
		const playerAlreadyExists = await this.playersRepository.findByPlayerId(
			playerId
		);
		if (playerAlreadyExists) {
			throw new AppError('Player already exists!');
		}
		await this.playersRepository.create({
			playerId,
			provider,
			nick: playerId,
		});
	}
}

export { CreatePlayerService };
