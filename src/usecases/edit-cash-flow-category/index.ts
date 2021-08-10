import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { ICashFlowCategoryInput } from '../../entities/cash-flow-category/cash-flow-category.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';

// eslint-disable-next-line import/prefer-default-export
export function makeEditCashFlowCategoryUC() {
  return async (req: { params: { id: string }; body: ICashFlowCategoryInput }) => {
    const unitOfWork = await uow();
    try {
      const payload = await unitOfWork
        .makeCashFlowCategoryRepository()
        .update(req.params, req.body);

      return { payload };
    } catch (error) {
      throw error instanceof CustomError
        ? error
        : new CustomError({
            statusCode: 422,
            name: ApiErrorsName.GenericName,
            type: ApiErrorsType.GenericType,
            message: apiMessages['E-1004'],
            i18nCode: 'E-1004',
            stack: error.stack,
            details: error,
          });
    }
  };
}
