import { Router } from 'express';

import { playersRoutes } from './PlayersRoutes';
// import { locationsRoutes } from './LocationsRoutes';
// import { gamesRoutes } from './GamesRoutes';
// import { rankingsRoutes } from './RankingsRoutes';

const router = Router();

router.use('/players', playersRoutes);
// router.use('/locations', locationsRoutes);
// router.use('/games', gamesRoutes);
// router.use('/rankings', rankingsRoutes);

export { router };
