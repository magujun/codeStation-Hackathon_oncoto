import { container } from 'tsyringe';
import axios from 'axios';

import auth from '@src/config/auth';
import FindLocation from './findLocation';
import OpenLocationCode from './plusCode';
import { CreateLocationService } from '@src/modules/services/locations/StoreLocationService';
import { ICreateLocationDTO } from '@src/modules/infra/DTOs/ICreateLocationDTO';

export async function LoadLocationData(plusCode: string) {
	const api_key = auth.GEO_key;
	const code = encodeURIComponent(plusCode);
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${api_key}`;
	const response: any = await axios.get(url);
	const data: ICreateLocationDTO = {
		// HANDLE POSSIBLE MISSING ENTRIES WITH || null?
		plus_code: response.results[0].plus_code.global_code, //could also .compound_code
		coordinates: `${response.results[0].geometry.location.lat},${response.results[0].geometry.location.lat}`,
		countryCode: response.results[0].address_components.find(element => element.types.includes("country")).short_name,
		street_address: ,
		route:,
		intersection:,
		political:,
		country:,
		administrative_area_level_1:,
		administrative_area_level_2:,
		administrative_area_level_3:,
		administrative_area_level_4:,
		administrative_area_level_5:,
		colloquial_area:,
		locality:,
		sublocality:,
		neighborhood:,
		premise:,
		subpremise:,
		postal_code:,
		natural_feature:,
		airport:,
		park:,
		point_of_interest:,
	}
	return data;
}

export default async function LoadLocations(recordsNumber: number) {
	const { lat, lng } = await FindLocation().location;
	const result = await LoadLocationData(
		OpenLocationCode.encode(lat, lng)
	);
	const {
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
	} = result;
	const createLocationService = container.resolve(CreateLocationService);
	await createLocationService.execute({
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
	if (recordsNumber > 1) {
		await LoadLocations(recordsNumber - 1);
	}
}
