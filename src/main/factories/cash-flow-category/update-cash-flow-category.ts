import makeUpdateEntityController from '../../../controllers/update-entity';
import { cashFlowCategoryRepository } from '../../../external/repositories/postgres/cash-flow-category-repository';
import { makeEditCashFlowCategoryUC } from '../../../usecases/edit-cash-flow-category';
import { makeUpdateCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const updateCashFlowCategory = makeUpdateEntityController({
  update: makeEditCashFlowCategoryUC(cashFlowCategoryRepository),
  requestValidator: makeUpdateCashFlowCategoryValidator(),
});

export default updateCashFlowCategory;
