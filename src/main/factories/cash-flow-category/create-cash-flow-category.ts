import makeCreateEntityController from '../../../controllers/create-entity';
import {
  ICashFlowCategory,
  ICashFlowCategoryInput,
} from '../../../entities/cash-flow-category/cash-flow-category.types';
import { cashFlowCategoryRepository } from '../../../external/repositories/postgres/cash-flow-category-repository';
import { makeCashFlowCategoryUC } from '../../../usecases/regist-cash-flow-category';
import { makeCreateCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const createCashFlowCategory = makeCreateEntityController<
  ICashFlowCategory,
  ICashFlowCategoryInput
>({
  create: makeCashFlowCategoryUC(cashFlowCategoryRepository),
  requestValidator: makeCreateCashFlowCategoryValidator(),
});

export default createCashFlowCategory;
