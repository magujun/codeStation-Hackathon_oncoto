import { Router } from 'express';

const rankingsRoutes = Router();

import { authenticate } from '../middlewares/authentication';
import { LoadRankingsController } from '@src/modules/services/rankings/LoadRankingsController';

const loadRankingsController = new LoadRankingsController();

rankingsRoutes.get('/', authenticate, loadRankingsController.handle);

export { rankingsRoutes };
