import { ICashFlow } from '../../entities/cash-flow/cash-flow.types';
import { MakeGetAllEntitiesDependencies } from '../../external/repositories/postgres/postgres.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import { GetAllCashFlows } from '../../validators/types/cash-flow';

// eslint-disable-next-line import/prefer-default-export
export function makeGetAllCashFlowsUC() {
  return async (query: GetAllCashFlows) => {
    const unitOfWork = await uow();
    const payload = await unitOfWork
      .makeCashFlowRepository()
      .getAll<MakeGetAllEntitiesDependencies<ICashFlow>>(query, {});

    return { payload };
  };
}
