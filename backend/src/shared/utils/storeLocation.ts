import { ICreateLocationDTO } from '@src/modules/infra/DTOs/ICreateLocationDTO';
import { ILocationsRepository } from '@src/modules/infra/typeorm/repositories/ILocationsRepository';
import { Location } from '@src/modules/infra/typeorm/entities/Location';

class LocationsRepository implements ILocationsRepository {
	private repository: Repository<Location>;

	constructor() {
		this.repository = getRepository(Location);
	}
	async create({ locationId, provider, nick }: ICreateLocationDTO): Promise<void> {
		const location = this.repository.create({
			locationId,
			provider,
			nick,
		});
		await this.repository.save(location);
	}