import joi from 'joi';

import { CashFlowObservation } from '../../../../constants';
import { ICashFlowObservationInput } from '../../../../entities/cash-flow-observation/cash-flow-observation.types';
import joiValidator from '../../../index';

const createCashFlowObservationsSchema = joi
  .object({
    descriptions: joi.array().items(joi.string()).min(1).required(),
    [CashFlowObservation.CashFlowId]: joi.string().uuid({ version: 'uuidv4' }).required(),
  })
  .required()
  .unknown(false);

export default joiValidator<ICashFlowObservationInput>(createCashFlowObservationsSchema);
