import { HttpRequest } from '../../../../controllers/controllers.types';
import createCashFlowSchemaValidator from './create-cash-flow-schema';
import getAllCashFlowsSchemaValidator from './get-all-cash-flows-schema';

export const makeCreateCashFlowValidator = () => async (req: HttpRequest) =>
  createCashFlowSchemaValidator(req.body);

export const makeGetAllCashFlowsValidator = () => async (req: HttpRequest) =>
  getAllCashFlowsSchemaValidator(req.query);
