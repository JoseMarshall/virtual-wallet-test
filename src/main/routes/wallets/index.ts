import { Router } from 'express';

import { adaptExpressRoute } from '../../adapters/express-route-adapter';
import makeCreateWalletController from '../../factories/wallet/create-wallet';
import makeGetAllWalletsController from '../../factories/wallet/get-all-wallets';

export default (router: Router) => {
  router.post('/', adaptExpressRoute(makeCreateWalletController));

  router.get('/', adaptExpressRoute(makeGetAllWalletsController));
  return router;
};
