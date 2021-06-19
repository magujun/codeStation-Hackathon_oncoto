import { getRepository, Repository } from 'typeorm';

import { ICreateLocationDTO } from '@src/modules/infra/DTOs/ICreateLocationDTO';
import { ILocationsRepository } from '@src/modules/infra/typeorm/repositories/ILocationsRepository';
import { Location } from '@src/modules/infra/typeorm/entities/Location';

class LocationsRepository implements ILocationsRepository {
	private repository: Repository<Location>;

	constructor() {
		this.repository = getRepository(Location);
	}
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
	}: ICreateLocationDTO): Promise<void> {
		const location = this.repository.create({
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
		await this.repository.save(location);
	}
	async findByPlusCode(plus_code: string): Promise<Location> {
		const location = await this.repository.findOne({ plus_code });
		return location;
	}
	list(): Promise<Location[]> {
		throw new Error('Method not implemented.');
	}
}

export { LocationsRepository };
