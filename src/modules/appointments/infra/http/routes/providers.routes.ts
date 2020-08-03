import { Router } from 'express';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controller/ProvidersController';
import ProviderMonthAvailabilityController from '../controller/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controller/ProviderDayAvailabilityController';

const providerRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providerRouter.use(ensureAuthenticate);

providerRouter.get('/', providersController.index);
providerRouter.get(
  '/:id/month-availability',
  providerMonthAvailabilityController.index,
);
providerRouter.get(
  '/:id/day-availability',
  providerDayAvailabilityController.index,
);

export default providerRouter;
