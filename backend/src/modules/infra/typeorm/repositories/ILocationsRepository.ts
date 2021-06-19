import { ICreateLocationDTO } from '../../DTOs/ICreateLocationDTO';
import { Location } from '../entities/Location';

interface ILocationsRepository {
	create({ locationId, provider }: ICreateLocationDTO): Promise<void>;
	findByLocationId(locationId: string): Promise<Location>;
	list(): Promise<Location[]>;
}

export { ILocationsRepository };
