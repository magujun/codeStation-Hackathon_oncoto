import FindLocation from './findLocation';
import OpenLocationCode from './plusCode';
import StoreLocation from './storeLocation';

export async function LoadLocations(recordsNumber: number) {
	const { lat, lng } = await FindLocation().location;
	await StoreLocation(
		await LoadLocationData(OpenLocationCode.encode(lat, lng))
	);
	if (recordsNumber > 1) {
		await LoadLocations(recordsNumber - 1);
	}

	async function LoadLocationData(plusCode: string) {}
}
