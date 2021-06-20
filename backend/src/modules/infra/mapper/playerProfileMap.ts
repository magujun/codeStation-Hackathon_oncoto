import { classToClass } from 'class-transformer';

import { Player } from '@src/modules/infra/typeorm/entities/Player';
import { IPlayerProfileResponseDTO } from '../DTOs/IPlayerProfileResponseDTO';

class PlayerProfileMap {
	static toDTO({
		id,
		playerId,
		provider,
		nick,
		avatar,
		createDate,
	}: Player): IPlayerProfileResponseDTO {
		const player = classToClass({
			id,
			playerId,
			provider,
			nick,
			avatar,
			createDate,
		});
		return player;
	}
}

export { PlayerProfileMap };
