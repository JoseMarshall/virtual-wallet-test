import makeUpdateEntityController from '../../../controllers/update-entity';
import { makeEditCashFlowCategoryUC } from '../../../usecases/edit-cash-flow-category';
import { makeUpdateCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const updateCashFlowCategory = makeUpdateEntityController({
  update: makeEditCashFlowCategoryUC(),
  requestValidator: makeUpdateCashFlowCategoryValidator(),
});

export default updateCashFlowCategory;
