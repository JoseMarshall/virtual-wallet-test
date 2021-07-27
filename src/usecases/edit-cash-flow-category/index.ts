import { ICashFlowCategoryInput } from '../../entities/cash-flow-category/cash-flow-category.types';
import { ICashFlowCategoryRepository } from '../../external/repositories/repository.types';

// eslint-disable-next-line import/prefer-default-export
export function makeEditCashFlowCategoryUC(repository: ICashFlowCategoryRepository) {
  return async (req: { params: { id: string }; body: ICashFlowCategoryInput }) => ({
    payload: await repository.update(req),
  });
}
