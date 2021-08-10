import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { ICashFlowCategory } from '../../entities/cash-flow-category/cash-flow-category.types';
import { MakeGetOneEntityDependencies } from '../../external/repositories/postgres/postgres.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';
import { GetOneCashFlowCategory } from '../../validators/types/cash-flow-category';

// eslint-disable-next-line import/prefer-default-export
export function makeGetOneCashFlowCategoryUC() {
  return async (query: GetOneCashFlowCategory) => {
    const unitOfWork = await uow();
    try {
      const payload = await unitOfWork
        .makeCashFlowCategoryRepository()
        .get<MakeGetOneEntityDependencies<ICashFlowCategory>>(query, {});

      return { payload };
    } catch (error) {
      throw error instanceof CustomError
        ? error
        : new CustomError({
            statusCode: 404,
            name: ApiErrorsName.ResourceNotFound,
            type: ApiErrorsType.GenericType,
            message: apiMessages['E-1008'],
            i18nCode: 'E-1008',
            stack: error.stack,
            details: error,
          });
    }
  };
}
