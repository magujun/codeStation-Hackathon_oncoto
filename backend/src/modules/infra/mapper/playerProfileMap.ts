import { classToClass } from 'class-transformer';

import { Player } from '@src/modules/infra/typeorm/entities/Player';
import { IPlayerProfileResponseDTO } from '../DTOs/IPlayerProfileResponseDTO';

class PlayerProfileMap {
	static toDTO({
		id,
		nick,
		playerId,
		provider,
		avatar,
		avatar_url,
	}: Player): IPlayerProfileResponseDTO {
		const player = classToClass({
			id,
			nick,
			playerId,
			provider,
			avatar,
			avatar_url,
		});
		return player;
	}
}

export { PlayerProfileMap };
