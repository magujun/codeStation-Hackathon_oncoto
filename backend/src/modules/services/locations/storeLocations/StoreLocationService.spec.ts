import 'reflect-metadata';
import { StoreLocationService } from './StoreLocationService';
import { LocationsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/LocationsRepositoryInMemory';
import { LoadLocationService } from '../loadLocations/LoadLocationService';

let storeLocationService: StoreLocationService;
let locationsRepositoryInMemory: LocationsRepositoryInMemory;
let loadLocationService: LoadLocationService;

describe('Store street view location', () => {
	beforeEach(() => {
		locationsRepositoryInMemory = new LocationsRepositoryInMemory();
		storeLocationService = new StoreLocationService(
			locationsRepositoryInMemory
		);
		loadLocationService = new LoadLocationService(locationsRepositoryInMemory);
	});
	it('Should be able to store a new street view location', async () => {
		await storeLocationService.execute({
			plus_code: 'testPlusCode1',
			coordinates: 'testCoordinates1',
			countryCode: 'XX',
			country: 'testCountry',
		});
		await storeLocationService.execute({
			plus_code: 'testPlusCode2',
			coordinates: 'testCoordinates2',
			countryCode: 'XX',
			country: 'testCountry',
		});
		const location = await loadLocationService.execute();
		expect(location).toHaveProperty('coordinates');
	});
});
