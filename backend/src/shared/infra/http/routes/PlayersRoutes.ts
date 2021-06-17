import { Router } from 'express';
import multer from 'multer';

import { authenticate } from '../middlewares/authentication';
import uploadConfig from '@config/upload';

import { CreatePlayerController } from '@src/modules/services/players/createPlayer/CreatePlayerController';
import { PlayerProfileController } from '@src/modules/services/players/playerProfile/playerProfileController';
import { UpdatePlayerAvatarController } from '@src/modules/services/players/updatePlayerAvatar/updatePlayerAvatarController';
// import { UpdatePlayerProfileController } from '@src/modules/services/players/updatePlayerAvatar/updatePlayerProfileController';

const playersRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const createPlayerController = new CreatePlayerController();
const playerProfileController = new PlayerProfileController();
const updatePlayerAvatarController = new UpdatePlayerAvatarController();
// const updatePlayerProfileController = new UpdatePlayerAvatarController();

playersRoutes.post('/', authenticate, createPlayerController.handle);
playersRoutes.get('/profile', authenticate, playerProfileController.handle);
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
