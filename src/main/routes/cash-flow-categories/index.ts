import { Router } from 'express';

import { adaptExpressRoute } from '../../adapters/express-route-adapter';
import makeCreateCashFlowCategoryController from '../../factories/cash-flow-category/create-cash-flow-category';
import makeGetAllCashFlowCategoriesController from '../../factories/cash-flow-category/get-all-cash-flow-categories';
import makeGetOneCashFlowCategoryController from '../../factories/cash-flow-category/get-one-cash-flow-category';
import makeUpdateCashFlowCategoryController from '../../factories/cash-flow-category/update-cash-flow-category';

export default (router: Router) => {
  router.get('/:id', adaptExpressRoute(makeGetOneCashFlowCategoryController));

  router.get('/', adaptExpressRoute(makeGetAllCashFlowCategoriesController));

  router.post('/', adaptExpressRoute(makeCreateCashFlowCategoryController));

  router.patch('/:id', adaptExpressRoute(makeUpdateCashFlowCategoryController));

  return router;
};
