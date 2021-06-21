import { classToClass } from 'class-transformer';

import { Location } from '@src/modules/infra/typeorm/entities/Location';
import { ILoadLocationResponseDTO } from '../DTOs/ILoadLocationResponseDTO';

class LoadLocationMap {
	static toDTO({ coordinates }: Location): ILoadLocationResponseDTO {
		const location = classToClass({
			coordinates,
		});
		return location;
	}
}

export { LoadLocationMap };
