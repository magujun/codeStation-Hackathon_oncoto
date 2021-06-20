import { LoadLocationController } from '@src/modules/services/locations/loadLocations/LoadLocationController';
import { Router } from 'express';

import { authenticate } from '../middlewares/authentication';
// import { CreateLocationController } from '@src/modules/services/locations/createLocation/CreateLocationController';

const locationsRoutes = Router();
// const createLocationController = new CreateLocationController();
const loadLocationController = new LoadLocationController();

// locationsRoutes.post('/:location', authenticate, createLocationController.handle);
locationsRoutes.get('/', authenticate, loadLocationController.handle);

export { locationsRoutes };
