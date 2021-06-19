import { container } from 'tsyringe';
// import '@shared/container/providers';

import { IPlayersRepository } from '@src/modules/infra/typeorm/repositories/IPlayersRepository';
import { PlayersRepository } from '@src/modules/infra/typeorm/repositories/PlayersRepository';

import { IGamesRepository } from '@src/modules/infra/typeorm/repositories/IGamesRepository';
import { GamesRepository } from '@src/modules/infra/typeorm/repositories/GamesRepository';

import { IRankingsRepository } from '@src/modules/infra/typeorm/repositories/IRankingsRepository';
import { RankingsRepository } from '@src/modules/infra/typeorm/repositories/RankingsRepository';

// import { ILocationsRepository } from '@modules/games/repositories/ILocationsRepository';
// import { LocationsRepository } from '@modules/games/infra/typeorm/repositories/LocationsRepository';

// IPlayersRepository
container.registerSingleton<IPlayersRepository>(
	'PlayersRepository',
	PlayersRepository
);

// IGamesRepository;
container.registerSingleton<IGamesRepository>(
	'GamesRepository',
	GamesRepository
);

// IRankingsRepository
container.registerSingleton<IRankingsRepository>(
	'RankingsRepository',
	RankingsRepository
);

// ILocationsRepository
// container.registerSingleton<ILocationsRepository>(
// 	'LocationsRepository',
// 	LocationsRepository
// );
