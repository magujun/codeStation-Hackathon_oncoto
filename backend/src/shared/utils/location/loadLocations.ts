import axios from 'axios';
import auth from '@src/config/auth';
import { ICreateLocationDTO } from '@src/modules/infra/DTOs/ICreateLocationDTO';
import FindLocation from './findLocation';
import OpenLocationCode from './plusCode';
import StoreLocation from './storeLocation';

export default async function LoadLocationData(plusCode: string) {
	const api_key = auth.GEO_key;
	const code = encodeURIComponent(plusCode);
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${api_key}`;
	const response = await axios.get(url);
	return response;
}

export async function LoadLocations(recordsNumber: number) {
	const { lat, lng } = await FindLocation().location;
	await StoreLocation(
		await LoadLocationData(OpenLocationCode.encode(lat, lng))
	);
	if (recordsNumber > 1) {
		await LoadLocations(recordsNumber - 1);
	}
}
