import { Entity, Column, PrimaryColumn } from 'typeorm';
import OpenLocationCode from '@src/shared/utils/location/plusCode';

@Entity('locations')
class Location {
	@PrimaryColumn()
	plus_code: string;
	@Column()
	coordinates: string;
	@Column()
	countryCode?: string;
	@Column()
	country?: string;
	@Column()
	street_address?: string;
	@Column()
	postal_code?: string;
	@Column()
	point_of_interest?: string;
	@Column()
	natural_feature?: string;
	@Column()
	route?: string;
	@Column()
	park?: string;
	@Column()
	airport?: string;
	@Column()
	intersection?: string;
	@Column()
	political?: string;
	@Column()
	administrative_area_level_1?: string;
	@Column()
	administrative_area_level_2?: string;
	@Column()
	administrative_area_level_3?: string;
	@Column()
	administrative_area_level_4?: string;
	@Column()
	administrative_area_level_5?: string;
	@Column()
	colloquial_area?: string;
	@Column()
	locality?: string;
	@Column()
	sublocality?: string;
	@Column()
	neighborhood?: string;
	@Column()
	premise?: string;
	@Column()
	subpremise?: string;
}

export { Location };
