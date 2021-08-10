import makeGetOneEntityController from '../../../controllers/get-one-entity';
import { makeGetOneCashFlowCategoryUC } from '../../../usecases/get-one-cash-flow-category';
import { makeGetOneCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const getOneCashFlowCategory = makeGetOneEntityController({
  findOne: makeGetOneCashFlowCategoryUC(),
  requestValidator: makeGetOneCashFlowCategoryValidator(),
});

export default getOneCashFlowCategory;
