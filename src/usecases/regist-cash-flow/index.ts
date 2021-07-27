import { makeCashFlow } from '../../entities/cash-flow';
import { ICashFlowInput } from '../../entities/cash-flow/cash-flow.types';
import { ICashFlowRepository } from '../../external/repositories/repository.types';

// eslint-disable-next-line import/prefer-default-export
export function makeCashFlowUC(repository: ICashFlowRepository) {
  return async (data: ICashFlowInput) => ({ payload: await repository.save(makeCashFlow(data)) });
}
