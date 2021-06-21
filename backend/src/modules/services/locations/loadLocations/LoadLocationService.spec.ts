import 'reflect-metadata';
import { LoadLocationService } from './LoadLocationService';
import { LocationsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/LocationsRepositoryInMemory';

let loadLocationService: LoadLocationService;
let locationsRepositoryInMemory: LocationsRepositoryInMemory;

describe('Load street view location', () => {
	beforeEach(() => {
		locationsRepositoryInMemory = new LocationsRepositoryInMemory();
		loadLocationService = new LoadLocationService(locationsRepositoryInMemory);
	});
	it('Should be able to load a random street view coordinate system', async () => {
		await locationsRepositoryInMemory.create({
			coordinates: '1,1',
		});
		await locationsRepositoryInMemory.create({
			coordinates: '2,1',
		});
		await locationsRepositoryInMemory.create({
			coordinates: '3,1',
		});
		await locationsRepositoryInMemory.create({
			coordinates: '4,1',
		});
		const location = await loadLocationService.execute();
		expect(location).toHaveProperty('coordinates');
	});
});
