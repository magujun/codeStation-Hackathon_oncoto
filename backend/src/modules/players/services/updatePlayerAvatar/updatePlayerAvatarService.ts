import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '@modules/players/repositories/IPlayersRepository';
import { IStorageProvider } from '@src/shared/container/providers/storageProvider/IStorageProvider';

interface IRequest {
	player_id: string;
	avatar_file: string;
}
@injectable()
class UpdatePlayerAvatarService {
	constructor(
		@inject('PlayersRepository')
		private playersRepository: IPlayersRepository,
		@inject('StorageProvider')
		private storageProvider: IStorageProvider
	) {}

	async execute({ player_id, avatar_file }: IRequest): Promise<void> {
		const player = await this.playersRepository.findByPlayerId(player_id);

		if (player.avatar) {
			await this.storageProvider.delete(player.avatar, 'avatar');
		}
		await this.storageProvider.save(avatar_file, 'avatar');

		player.avatar = avatar_file;

		await this.playersRepository.create(player);
	}
}

export { UpdatePlayerAvatarService };

// Adicionar coluna avatar na tabela players
// Refatorar player com coluna avatar
// Configuração upload multer
// Criar regra de negócio do upload
// Criar controller
