import { Router } from 'express';

const rankingsRoutes = Router();

import { authenticate } from '../middlewares/authentication';
import { LoadRankingController } from '@src/modules/services/rankings/LoadRankingController';

const loadRankingsController = new LoadRankingController();

rankingsRoutes.get('/', authenticate, loadRankingsController.handle);

export { rankingsRoutes };
