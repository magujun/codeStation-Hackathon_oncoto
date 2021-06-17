interface IDateProvider {
	dateNow(): Date;
	convertToUTC(date: Date): string;
	compareHours(start_date: Date, end_date: Date): number;
	compareDays(start_date: Date, end_date: Date): number;
	addDays(days: number): Date;
	addHours(hours: number): Date;
	compareBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
