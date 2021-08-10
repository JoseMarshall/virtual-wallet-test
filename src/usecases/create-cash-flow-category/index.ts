import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { makeCashFlowCategory } from '../../entities/cash-flow-category';
import { ICashFlowCategoryInput } from '../../entities/cash-flow-category/cash-flow-category.types';
import uow from '../../external/repositories/postgres/unit-of-work';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';

// eslint-disable-next-line import/prefer-default-export
export function makeCashFlowCategoryUC() {
  return async (data: ICashFlowCategoryInput) => {
    const unitOfWork = await uow();

    try {
      const cashFlowCategoryRepo = unitOfWork.makeCashFlowCategoryRepository();
      const createdCategory = await cashFlowCategoryRepo.add(makeCashFlowCategory(data));
      return {
        payload: createdCategory,
      };
    } catch (error) {
      throw error instanceof CustomError
        ? error
        : new CustomError({
            statusCode: 422,
            name: ApiErrorsName.GenericName,
            type: ApiErrorsType.GenericType,
            message: apiMessages['E-1006'],
            i18nCode: 'E-1006',
            stack: error.stack,
            details: error,
          });
    }
  };
}
