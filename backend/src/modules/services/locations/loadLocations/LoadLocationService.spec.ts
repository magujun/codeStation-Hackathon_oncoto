import 'reflect-metadata';
import { LoadLocationService } from './LoadLocationService';
import { LocationsRepositoryInMemory } from '@src/modules/infra/typeorm/repositories/inMemory/LocationsRepositoryInMemory';
import { AppResponse } from '@src/shared/responses/AppResponse';

let loadLocationService: LoadLocationService;
let locationsRepositoryInMemory: LocationsRepositoryInMemory;

describe('Create Location', () => {
	beforeEach(() => {
		locationsRepositoryInMemory = new LocationsRepositoryInMemory();
		loadLocationService = new LoadLocationService(locationsRepositoryInMemory);
	});
	it('Should be able to create a new location', async () => {
		const location = await loadLocationService.execute({
			locationId: 'testLocation',
			provider: 'testProvider',
		});
		expect(location).toHaveProperty('id');
	});
	it('Should not be able to create a location if locationId already exists', () => {
		expect(async () => {
			await loadLocationService.execute({
				locationId: 'testLocation',
				provider: 'testProvider',
			});
			await loadLocationService.execute({
				locationId: 'testLocation',
				provider: 'testProvider',
			});
		}).rejects.toBeInstanceOf(AppResponse);
	});
});
