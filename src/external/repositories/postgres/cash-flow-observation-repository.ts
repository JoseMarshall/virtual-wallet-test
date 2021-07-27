import { ApiErrorsName, ApiErrorsType } from '../../../constants/errors';
import { ICashFlowObservation } from '../../../entities/cash-flow-observation/cash-flow-observation.types';
import apiMessages from '../../../locales/pt/api-server.json';
import CustomError from '../../../utils/custom-error';
import { ICashFlowObservationRepository } from '../repository.types';
import { makeCreateManyEntities } from './methods';
import { CashFlowModel } from './models';

async function save(observations: ICashFlowObservation[]) {
  try {
    return makeCreateManyEntities<ICashFlowObservation>({ model: CashFlowModel })(observations);
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
export const cashFlowObservationRepository: ICashFlowObservationRepository = {
  save,
};
