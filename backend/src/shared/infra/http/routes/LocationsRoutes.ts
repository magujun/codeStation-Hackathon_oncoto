import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateLocationController } from '@modules/players/services/createLocation/CreateLocationController';
import { UpdateLocationAvatarController } from '@modules/players/services/updateLocationAvatar/updateLocationAvatarController';
import { LocationProfileController } from '@src/modules/players/services/locationProfile/locationProfileController';

const locationsRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const createLocationController = new CreateLocationController();
const updateLocationAvatarController = new UpdateLocationAvatarController();
const locationProfileController = new LocationProfileController();

locationsRoutes.post('/', createLocationController.handle);
locationsRoutes.patch(
	'/avatar',
	uploadAvatar.single('avatar'),
	updateLocationAvatarController.handle
);
locationsRoutes.get('/profile', locationProfileController.handle);

export { locationsRoutes };
