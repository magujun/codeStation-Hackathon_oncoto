import { container } from 'tsyringe';
// import '@shared/container/providers';

import { IPlayersRepository } from '@modules/players/repositories/IPlayersRepository';
import { PlayersRepository } from '@modules/infra/typeorm/repositories/PlayersRepository';

// import { IGamesRepository } from '@modules/games/repositories/IGamesRepository';
// import { GamesRepository } from '@modules/games/infra/typeorm/repositories/GamesRepository';

// import { IRankingsRepository } from '@modules/games/repositories/IRankingsRepository';
// import { RankingsRepository } from '@modules/games/infra/typeorm/repositories/RankingsRepository';

// import { ILocationsRepository } from '@modules/games/repositories/ILocationsRepository';
// import { LocationsRepository } from '@modules/games/infra/typeorm/repositories/LocationsRepository';

// IPlayersRepository
container.registerSingleton<IPlayersRepository>(
	'PlayersRepository',
	PlayersRepository
);

// IGamesRepository
// container.registerSingleton<IGamesRepository>(
// 	'GamesRepository',
// 	GamesRepository
// );

// IRankingsRepository
// container.registerSingleton<IRankingsRepository>(
// 	'RankingsRepository',
// 	RankingsRepository
// );

// ILocationsRepository
// container.registerSingleton<ILocationsRepository>(
// 	'LocationsRepository',
// 	LocationsRepository
// );
