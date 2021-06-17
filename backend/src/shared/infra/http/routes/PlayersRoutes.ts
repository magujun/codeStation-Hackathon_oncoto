import { Router } from 'express';
// import multer from 'multer';

// import uploadConfig from '@config/upload';

import { CreatePlayerController } from '@src/modules/services/players/createPlayer/CreatePlayerController';
import { PlayerProfileController } from '@src/modules/services/players/playerProfile/playerProfileController';
// import { UpdatePlayerAvatarController } from '@modules/players/services/updatePlayerAvatar/updatePlayerAvatarController';

const playersRoutes = Router();
// const uploadAvatar = multer(uploadConfig);

const createPlayerController = new CreatePlayerController();
const playerProfileController = new PlayerProfileController();
// const updatePlayerAvatarController = new UpdatePlayerAvatarController();

playersRoutes.post('/', createPlayerController.handle);
playersRoutes.get('/profile', playerProfileController.handle);
// playersRoutes.patch(
// 	'/avatar',
// 	uploadAvatar.single('avatar'),
// 	updatePlayerAvatarController.handle
// );
// playersRoutes.patch(
// 	'/update',
// 	updatePlayerProfileController.handle
// );

export { playersRoutes };
