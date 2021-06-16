import { container } from 'tsyringe';
import { LocalStorageProvider } from './implementations/LocalStorageProvider';
import { IStorageProvider } from './IStorageProvider';

const diskStorage = LocalStorageProvider;

container.registerSingleton<IStorageProvider>(
	'StorageProvider',
	diskStorage[process.env.DISK]
);
