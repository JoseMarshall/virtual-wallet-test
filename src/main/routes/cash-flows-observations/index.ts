import { Router } from 'express';

import { adaptExpressRoute } from '../../adapters/express-route-adapter';
import makeCreateCashFlowObservationController from '../../factories/cash-flow-observations/create-cash-flow-observation';

export default (router: Router) => {
  router.post('/', adaptExpressRoute(makeCreateCashFlowObservationController));

  return router;
};
