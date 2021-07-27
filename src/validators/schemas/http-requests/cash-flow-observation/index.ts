import { HttpRequest } from '../../../../controllers/controllers.types';
import createCashFlowObservationSchemaValidator from './create-cash-flow-observation-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateCashFlowObservationValidator = () => async (req: HttpRequest) =>
  createCashFlowObservationSchemaValidator(req.body);
