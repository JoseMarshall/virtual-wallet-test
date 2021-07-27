import { ICashFlowCategoryRepository } from '../../external/repositories/repository.types';
import { GetOneCashFlowCategory } from '../../validators/types/cash-flow-category';

// eslint-disable-next-line import/prefer-default-export
export function makeGetOneCashFlowCategoryUC(repository: ICashFlowCategoryRepository) {
  return async (query: GetOneCashFlowCategory) => ({ payload: await repository.findOne(query) });
}
