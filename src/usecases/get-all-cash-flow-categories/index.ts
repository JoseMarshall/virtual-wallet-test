import { ICashFlowCategoryRepository } from '../../external/repositories/repository.types';
import { GetAllCashFlowCategories } from '../../validators/types/cash-flow-category';

// eslint-disable-next-line import/prefer-default-export
export function makeGetAllCashFlowCategoriesUC(repository: ICashFlowCategoryRepository) {
  return async (query: GetAllCashFlowCategories) => ({ payload: await repository.findAll(query) });
}
