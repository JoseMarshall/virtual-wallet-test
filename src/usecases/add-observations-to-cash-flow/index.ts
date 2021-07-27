import { ApiErrorsName, ApiErrorsType } from '../../constants';
import { makeCashFlowObservation } from '../../entities/cash-flow-observation';
import { ICashFlowObservationInput } from '../../entities/cash-flow-observation/cash-flow-observation.types';
import { ICashFlowObservationRepository } from '../../external/repositories/repository.types';
import apiMessages from '../../locales/pt/api-server.json';
import CustomError from '../../utils/custom-error';

// eslint-disable-next-line import/prefer-default-export
export function makeAddObservationsToCashflowUC(repository: ICashFlowObservationRepository) {
  return async (data: ICashFlowObservationInput) => {
    try {
      const observations = data.descriptions.flatMap(description => [
        makeCashFlowObservation({ description, cashFlowId: data.cashFlowId }),
      ]);
      return { payload: await repository.save(observations) };
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
