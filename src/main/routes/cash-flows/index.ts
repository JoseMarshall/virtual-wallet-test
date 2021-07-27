import { Router } from 'express';

import { adaptExpressRoute } from '../../adapters/express-route-adapter';
import makeCreateCashFlowController from '../../factories/cash-flow/create-cash-flow';

export default (router: Router) => {
  router.post('/', adaptExpressRoute(makeCreateCashFlowController));

  return router;
};
