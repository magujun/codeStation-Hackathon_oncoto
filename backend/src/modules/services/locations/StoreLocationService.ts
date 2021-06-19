import { ICreateLocationDTO } from '@src/modules/infra/DTOs/ICreateLocationDTO';
import { ILocationsRepository } from '@src/modules/infra/typeorm/repositories/ILocationsRepository';
import { AppError } from '@src/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateLocationService {
	constructor(
		@inject('LocationsRepository')
		private locationsRepository: ILocationsRepository
	) {}

	async execute({
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
		const locationAlreadyExists = await this.locationsRepository.findByPlusCode(
			plus_code
		);
		if (locationAlreadyExists) {
			throw new AppError('Location already exists!', 400);
		}
		await this.locationsRepository.create({
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
	}
}

export { CreateLocationService };
