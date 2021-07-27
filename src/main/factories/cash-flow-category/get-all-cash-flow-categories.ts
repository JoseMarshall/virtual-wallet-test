import makeGetAllEntitiesController from '../../../controllers/get-all-entities';
import { cashFlowCategoryRepository } from '../../../external/repositories/postgres/cash-flow-category-repository';
import { makeGetAllCashFlowCategoriesUC } from '../../../usecases/get-all-cash-flow-categories';
import { makeGetAllCashFlowCategoriesValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const getAllCashFlowCategories = makeGetAllEntitiesController({
  findAll: makeGetAllCashFlowCategoriesUC(cashFlowCategoryRepository),
  requestValidator: makeGetAllCashFlowCategoriesValidator(),
});

export default getAllCashFlowCategories;
