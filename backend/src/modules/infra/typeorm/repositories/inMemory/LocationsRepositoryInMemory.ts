import { ILocationsRepository } from '../ILocationsRepository';
import { Location } from '../../entities/Location';
import { ILoadLocationResponseDTO } from '@src/modules/infra/DTOs/ILoadLocationResponseDTO';

class LocationsRepositoryInMemory implements ILocationsRepository {
	locations: Location[] = [];

	async create({
		coordinates,
		plus_code,
	}: ILoadLocationResponseDTO): Promise<void> {
		const location = new Location();
		Object.assign(location, {
			plus_code,
			coordinates,
		});
		this.locations.push(location);
	}

	async findRandomLocation(): Promise<Location> {
		const randomLocation =
			this.locations[Math.floor(Math.random() * this.locations.length)];
		return randomLocation;
	}
	async findByPlusCode(plus_code: string): Promise<Location> {
		return this.locations.find((loc) => loc.plus_code === plus_code);
	}
	list(): Promise<Location[]> {
		throw new Error('Method not implemented.');
	}
}

export { LocationsRepositoryInMemory };
