import 'reflect-metadata';
import { LoadLocationService } from './LoadLocationService';
import { LocationsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/LocationsRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let loadLocationService: LoadLocationService;
let locationsRepositoryInMemory: LocationsRepositoryInMemory;

describe('Load street view location', () => {
	beforeEach(() => {
		locationsRepositoryInMemory = new LocationsRepositoryInMemory();
		loadLocationService = new LoadLocationService(locationsRepositoryInMemory);
	});
	it('Should be able to load a random street view coordinate system', async () => {
		const location = await loadLocationService.execute();
		expect(location).toHaveProperty('coordinates');
	});
});
