import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { ICashFlow } from '../../entities/cash-flow/cash-flow.types';
import { MakeGetAllEntitiesDependencies } from '../../external/repositories/postgres/postgres.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';
import { GetAllCashFlows } from '../../validators/types/cash-flow';

// eslint-disable-next-line import/prefer-default-export
export function makeGetAllCashFlowsUC() {
  return async (query: GetAllCashFlows) => {
    const unitOfWork = await uow();
    try {
      const payload = await unitOfWork
        .makeCashFlowRepository()
        .getAll<MakeGetAllEntitiesDependencies<ICashFlow>>(query, {});

      return { payload };
    } catch (error) {
      throw error instanceof CustomError
        ? error
        : new CustomError({
            statusCode: 422,
            name: ApiErrorsName.GenericName,
            type: ApiErrorsType.GenericType,
            message: apiMessages['E-1008'],
            i18nCode: 'E-1008',
            stack: error.stack,
            details: error,
          });
    }
  };
}
