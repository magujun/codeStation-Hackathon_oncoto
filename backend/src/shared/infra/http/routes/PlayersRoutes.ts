import { Router } from 'express';
import multer from 'multer';

import { authenticate } from '../middlewares/authentication';
import uploadConfig from '@config/upload';

import { CreatePlayerController } from '@src/modules/services/players/createPlayer/CreatePlayerController';

import { UpdatePlayerAvatarController } from '@src/modules/services/players/updatePlayerAvatar/UpdatePlayerAvatarController';
import { PlayerProfileController } from '@src/modules/services/players/playerProfile/PlayerProfileController';
// import { UpdatePlayerProfileController } from '@src/modules/services/players/updatePlayerAvatar/updatePlayerProfileController';

const playersRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const createPlayerController = new CreatePlayerController();
const playerProfileController = new PlayerProfileController();
const updatePlayerAvatarController = new UpdatePlayerAvatarController();
// const updatePlayerProfileController = new UpdatePlayerAvatarController();

playersRoutes.post('/', authenticate, createPlayerController.handle);
playersRoutes.get('/:playerId', authenticate, playerProfileController.handle);
playersRoutes.patch(
	'/avatar',
	authenticate,
	uploadAvatar.single('avatar'),
	updatePlayerAvatarController.handle
);
// playersRoutes.patch(
//   '/update',
//   authenticate,
// 	updatePlayerProfileController.handle
// );

export { playersRoutes };
