import makeCreateEntityController from '../../../controllers/create-entity';
import {
  ICashFlowCategory,
  ICashFlowCategoryInput,
} from '../../../entities/cash-flow-category/cash-flow-category.types';
import { makeCashFlowCategoryUC } from '../../../usecases/create-cash-flow-category';
import { makeCreateCashFlowCategoryValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const createCashFlowCategory = makeCreateEntityController<
  ICashFlowCategory,
  ICashFlowCategoryInput
>({
  create: makeCashFlowCategoryUC(),
  requestValidator: makeCreateCashFlowCategoryValidator(),
});

export default createCashFlowCategory;
