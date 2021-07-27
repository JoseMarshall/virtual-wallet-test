import { Router } from 'express';

import { adaptExpressRoute } from '../../adapters/express-route-adapter';
import makeCreateWalletController from '../../factories/wallet/create-wallet';
import makeGetAllWalletsController from '../../factories/wallet/get-all-wallets';
import makeGetOneWalletController from '../../factories/wallet/get-one-wallet';

export default (router: Router) => {
  router.get('/:id', adaptExpressRoute(makeGetOneWalletController));

  router.get('/', adaptExpressRoute(makeGetAllWalletsController));

  router.post('/', adaptExpressRoute(makeCreateWalletController));

  return router;
};
