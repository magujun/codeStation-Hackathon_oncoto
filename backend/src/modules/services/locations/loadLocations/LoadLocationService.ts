import { ILoadLocationResponseDTO } from '@src/modules/infra/DTOs/ILoadLocationDTO';
import { LoadLocationMap } from '@src/modules/infra/mapper/loadLocationMap';
import { ILocationsRepository } from '@src/modules/infra/typeorm/repositories/ILocationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class LoadLocationService {
	constructor(
		@inject('LocationsRepository')
		private locationsRepository: ILocationsRepository
	) {}
	async execute(): Promise<ILoadLocationResponseDTO> {
		const location = await this.locationsRepository.findRandomLocation();
		return LoadLocationMap.toDTO(location);
	}
}

export { LoadLocationService };
