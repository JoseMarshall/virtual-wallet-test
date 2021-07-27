import { makeCashFlowCategory } from '../../entities/cash-flow-category';
import { ICashFlowCategoryInput } from '../../entities/cash-flow-category/cash-flow-category.types';
import { ICashFlowCategoryRepository } from '../../external/repositories/repository.types';

// eslint-disable-next-line import/prefer-default-export
export function makeCashFlowCategoryUC(repository: ICashFlowCategoryRepository) {
  return async (data: ICashFlowCategoryInput) => ({
    payload: await repository.save(makeCashFlowCategory(data)),
  });
}
