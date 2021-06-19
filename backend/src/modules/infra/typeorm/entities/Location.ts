import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('location')
class Location {
	@PrimaryColumn()
	plus_code: string;
	// indicates an encoded location reference, derived from latitude and longitude.Plus codes can be used as a replacement for street addresses in places where they do not exist(where buildings are not numbered or streets are not named).See https://plus.codes for details.
	@Column()
	coordinates: string;
	@Column()
	countryCode: string;
	@Column()
	street_address?: string;
	// indicates a precise street address.
	@Column()
	route?: string;
	// indicates a named route(such as "US 101").
	@Column()
	intersection?: string;
	// indicates a major intersection, usually of two major roads.
	@Column()
	political?: string;
	// indicates a political entity.Usually, this type indicates a polygon of some civil administration.
	@Column()
	country: string;
	// indicates the national political entity, and is typically the highest order type returned by the Geocoder.
	@Column()
	administrative_area_level_1?: string;
	// indicates a first - order civil entity below the country level.Within the United States, these administrative levels are states.Not all nations exhibit these administrative levels.In most cases, administrative_area_level_1 short names will closely match ISO 3166 - 2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.
	@Column()
	administrative_area_level_2?: string;
	// indicates a second-order civil entity below the country level.Within the United States, these administrative levels are counties.Not all nations exhibit these administrative levels.
	@Column()
	administrative_area_level_3?: string;
	// indicates a third-order civil entity below the country level.This type indicates a minor civil division.Not all nations exhibit these administrative levels.
	@Column()
	administrative_area_level_4?: string;
	// indicates a fourth-order civil entity below the country level.This type indicates a minor civil division.Not all nations exhibit these administrative levels.
	@Column()
	administrative_area_level_5?: string;
	// indicates a fifth-order civil entity below the country level.This type indicates a minor civil division.Not all nations exhibit these administrative levels.
	@Column()
	colloquial_area?: string;
	// indicates a commonly-used alternative name for the entity.
	@Column()
	locality?: string;
	// indicates an incorporated city or town political entity.
	@Column()
	sublocality?: string;
	// indicates a first-order civil entity below a locality.For some locations may receive one of the additional types: sublocality_level_1 to sublocality_level_5.Each sublocality level is a civil entity.Larger numbers indicate a smaller geographic area.
	@Column()
	neighborhood?: string;
	// indicates a named neighborhood
	@Column()
	premise?: string;
	// indicates a named location, usually a building or collection of buildings with a common name
	@Column()
	subpremise?: string;
	// indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name
	@Column()
	postal_code?: string;
	// indicates a postal code as used to address postal mail within the country.
	@Column()
	natural_feature?: string;
	// indicates a prominent natural feature.
	@Column()
	airport?: string;
	// indicates an airport.
	@Column()
	park?: string;
	// indicates a named park.
	@Column()
	point_of_interest?: string;
	// indicates a named point of interest.Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}
export { Location };
