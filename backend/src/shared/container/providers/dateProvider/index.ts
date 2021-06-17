import { container } from 'tsyringe';
import { IDateProvider } from './IDateProvider';
import { DayJSDateProvider } from './implementations/DayJSDateProvider';

container.registerSingleton<IDateProvider>(
	'DayJSDateProvider',
	DayJSDateProvider
);
