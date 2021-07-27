import makeCreateEntityController from '../../../controllers/create-entity';
import {
  ICashFlowObservation,
  ICashFlowObservationInput,
} from '../../../entities/cash-flow-observation/cash-flow-observation.types';
import { cashFlowObservationRepository } from '../../../external/repositories/postgres/cash-flow-observation-repository';
import { makeAddObservationsToCashflowUC } from '../../../usecases/add-observations-to-cash-flow';
import { makeCreateCashFlowObservationValidator } from '../../../validators/schemas/http-requests/cash-flow-observation';

const createCashFlowObservations = makeCreateEntityController<
  ICashFlowObservation[],
  ICashFlowObservationInput
>({
  create: makeAddObservationsToCashflowUC(cashFlowObservationRepository),
  requestValidator: makeCreateCashFlowObservationValidator(),
});

export default createCashFlowObservations;
