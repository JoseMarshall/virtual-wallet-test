import makeGetAllEntitiesController from '../../../controllers/get-all-entities';
import { makeGetAllCashFlowCategoriesUC } from '../../../usecases/get-all-cash-flow-categories';
import { makeGetAllCashFlowCategoriesValidator } from '../../../validators/schemas/http-requests/cash-flow-category';

const getAllCashFlowCategories = makeGetAllEntitiesController({
  findAll: makeGetAllCashFlowCategoriesUC(),
  requestValidator: makeGetAllCashFlowCategoriesValidator(),
});

export default getAllCashFlowCategories;
