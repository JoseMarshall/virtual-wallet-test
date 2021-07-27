import makeGetOneEntityController from '../../../controllers/get-one-entity';
import { cashFlowCategoryRepository } from '../../../external/repositories/postgres/cash-flow-category-repository';
import { makeGetOneCashFlowCategoryUC } from '../../../usecases/get-one-cash-flow-category';
import { makeGetOneCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const getOneCashFlowCategory = makeGetOneEntityController({
  findOne: makeGetOneCashFlowCategoryUC(cashFlowCategoryRepository),
  requestValidator: makeGetOneCashFlowCategoryValidator(),
});

export default getOneCashFlowCategory;
