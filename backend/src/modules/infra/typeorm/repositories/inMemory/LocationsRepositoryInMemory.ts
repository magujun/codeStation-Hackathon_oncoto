import { ILocationsRepository } from '../ILocationsRepository';
import { ILoadLocationDTO } from '@src/modules/infra/DTOs/ILoadLocationDTO';
import { Location } from '../../entities/Location';

class LocationsRepositoryInMemory implements ILocationsRepository {
	locations: Location[] = [];

	async create({
		plus_code,
		coordinates,
		countryCode,
		street_address,
		route,
		intersection,
		political,
		country,
		administrative_area_level_1,
		administrative_area_level_2,
		administrative_area_level_3,
		administrative_area_level_4,
		administrative_area_level_5,
		colloquial_area,
		locality,
		sublocality,
		neighborhood,
		premise,
		subpremise,
		postal_code,
		natural_feature,
		airport,
		park,
		point_of_interest,
	}: ILoadLocationDTO): Promise<void> {
		const location = new Location();
		Object.assign(location, {
			plus_code,
			coordinates,
			countryCode,
			street_address,
			route,
			intersection,
			political,
			country,
			administrative_area_level_1,
			administrative_area_level_2,
			administrative_area_level_3,
			administrative_area_level_4,
			administrative_area_level_5,
			colloquial_area,
			locality,
			sublocality,
			neighborhood,
			premise,
			subpremise,
			postal_code,
			natural_feature,
			airport,
			park,
			point_of_interest,
		});
		this.locations.push(location);
	}

	async findByPlusCode(plus_code: string): Promise<Location> {
		const location = await this.locations.findOne({ plus_code });
		return location;
	}

	async findRandomLocation(): Promise<Location> {
		const [randomLocation] = await this.locations.query(
			`SELECT coordinates FROM locations ORDER BY RANDOM() ASC LIMIT 1`
		);
		// const location = await this.repository.queryRunner. getTable('games').
		// 	.orderBy('RAND()')
		// 	.getOne();
		return randomLocation;
	}

	async list(): Promise<Location[]> {
		throw new Error('Method not implemented.');
	}
}
}

export { LocationsRepositoryInMemory };
