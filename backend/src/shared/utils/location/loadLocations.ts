import 'reflect-metadata';
import { container } from 'tsyringe';
import axios from 'axios';

import auth from '@src/config/auth';
import FindLocation from './findLocation';
import OpenLocationCode from './plusCode';
import { StoreLocationService } from '@src/modules/services/locations/storeLocations/StoreLocationService';
import { IStoreLocationDTO } from '@src/modules/infra/DTOs/IStoreLocationDTO';

export async function LoadLocationData(plusCode: string) {
	const api_key = auth.GEO_key;
	const code = encodeURIComponent(plusCode);
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${api_key}`;
	const response: any = await axios.get(url);
	console.log('Geocode search response:', response.data.results[0]);
	const findIf = (array: any[], search: string, query: string) => {
		if (!array) return null;
		const match = array.find((element) => element.types.includes(search));
		return match ? (match[query] ? match[query] : null) : null;
	};
	const mapResponseToData = (result: any) =>
		({
			// HANDLE POSSIBLE MISSING ENTRIES WITH || null and ?: conditionals?
			plus_code: result.plus_code.global_code, //could also .compound_code
			coordinates: `${result.geometry.location.lat},${result.geometry.location.lat}`,
			countryCode: findIf(result.address_components, 'country', 'short_name'),
			street_address: result.formatted_address,
			route: findIf(result.address_components, 'route', 'long_name'),
			intersection: findIf(
				result.address_components,
				'intersection',
				'long_name'
			),
			political: findIf(result.address_components, 'political', 'long_name'),
			country: findIf(result.address_components, 'country', 'long_name'),
			administrative_area_level_1: findIf(
				result.address_components,
				'administrative_area_level_1',
				'long_name'
			),
			administrative_area_level_2: findIf(
				result.address_components,
				'administrative_area_level_2',
				'long_name'
			),
			administrative_area_level_3: findIf(
				result.address_components,
				'administrative_area_level_3',
				'long_name'
			),
			administrative_area_level_4: findIf(
				result.address_components,
				'administrative_area_level_4',
				'long_name'
			),
			administrative_area_level_5: findIf(
				result.address_components,
				'administrative_area_level_5',
				'long_name'
			),
			colloquial_area: findIf(
				result.address_components,
				'colloquial_area',
				'long_name'
			),
			locality: findIf(result.address_components, 'locality', 'long_name'),
			sublocality: findIf(
				result.address_components,
				'sublocality',
				'long_name'
			),
			neighborhood: findIf(
				result.address_components,
				'neighborhood',
				'long_name'
			),
			premise: findIf(result.address_components, 'premise', 'long_name'),
			subpremise: findIf(result.address_components, 'subpremise', 'long_name'),
			postal_code: findIf(
				result.address_components,
				'postal_code',
				'long_name'
			),
			natural_feature: findIf(
				result.address_components,
				'natural_feature',
				'long_name'
			),
			airport: findIf(result.address_components, 'airport', 'long_name'),
			park: findIf(result.address_components, 'park', 'long_name'),
			point_of_interest: findIf(
				result.address_components,
				'point_of_interest',
				'long_name'
			),
		} as IStoreLocationDTO);
	const data: IStoreLocationDTO = mapResponseToData(response.data.results[0]);
	return data;
}

export default async function LoadLocations(recordsNumber: number) {
	console.log('StreetView search results:', FindLocation());
	const { lat, lng } = await FindLocation();
	console.log('StreetView search coordinates:', lat, lng);
	const result = await LoadLocationData(OpenLocationCode.encode(lat, lng));
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
	console.log('Storing location: ', result);
	const storeLocationService = container.resolve(StoreLocationService);
	await storeLocationService.execute({
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
