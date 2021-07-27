import { HttpRequest } from '../../../../controllers/controllers.types';
import createCashFlowSchemaValidator from './create-cash-flow-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateCashFlowValidator = () => async (req: HttpRequest) =>
  createCashFlowSchemaValidator(req.body);
