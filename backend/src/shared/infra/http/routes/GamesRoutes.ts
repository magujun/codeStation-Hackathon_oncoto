import { Router } from 'express';

import { authenticate } from '../middlewares/authentication';

import { CreateGameController } from '@src/modules/services/games/createGame/CreateGameController';

const gamesRoutes = Router();

const createGameController = new CreateGameController();

gamesRoutes.post('/', authenticate, createGameController.handle);

export { gamesRoutes };
