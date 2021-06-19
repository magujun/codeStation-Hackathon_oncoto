interface ICreateLocationDTO {
	plus_code: string;
	coordinates: string;
	countryCode: string;
	street_address?: string;
	route?: string;
	intersection?: string;
	political?: string;
	country: string;
	administrative_area_level_1?: string;
	administrative_area_level_2?: string;
	administrative_area_level_3?: string;
	administrative_area_level_4?: string;
	administrative_area_level_5?: string;
	colloquial_area?: string;
	locality?: string;
	sublocality?: string;
	neighborhood?: string;
	premise?: string;
	subpremise?: string;
	postal_code?: string;
	natural_feature?: string;
	airport?: string;
	park?: string;
	point_of_interest?: string;
}
export { ICreateLocationDTO };
