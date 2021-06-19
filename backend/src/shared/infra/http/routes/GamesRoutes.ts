import { Router } from 'express';

import { authenticate } from '../middlewares/authentication';
import { CreateGameController } from '@src/modules/services/games/createGame/CreateGameController';
import { FindGameByIdController } from '@src/modules/services/games/findByGameId/findByGameIdController';

const gamesRoutes = Router();
const createGameController = new CreateGameController();
const findGameByIdController = new FindGameByIdController();

gamesRoutes.post('/', authenticate, createGameController.handle);
gamesRoutes.get('/:id', authenticate, findGameByIdController.handle);

export { gamesRoutes };
