import { ApiErrorsName, ApiErrorsType } from '../../../constants/errors';
import { ICashFlow } from '../../../entities/cash-flow/cash-flow.types';
import apiMessages from '../../../locales/pt/api-server.json';
import CustomError from '../../../utils/custom-error';
import { ICashFlowRepository } from '../repository.types';
import { makeCreateEntity } from './methods';
import { CashFlowModel } from './models';

async function save(cashFlow: ICashFlow) {
  try {
    return makeCreateEntity<ICashFlow>({ model: CashFlowModel })(cashFlow);
  } catch (error) {
    throw new CustomError({
      statusCode: 422,
      name: ApiErrorsName.MissingFields,
      type: ApiErrorsType.ValidationError,
      message: apiMessages['E-1006'],
      i18nCode: 'E-1006',
      stack: error.stack,
      details: error,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export const cashFlowRepository: ICashFlowRepository = {
  save,
};
