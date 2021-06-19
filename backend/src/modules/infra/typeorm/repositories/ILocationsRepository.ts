import { ICreateLocationDTO } from '../../DTOs/ICreateLocationDTO';
import { Location } from '../entities/Location';

interface ILocationsRepository {
	create({
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
	}: ICreateLocationDTO): Promise<void>;
	findByPlusCode(locationId: string): Promise<Location>;
	list(): Promise<Location[]>;
}

export { ILocationsRepository };
