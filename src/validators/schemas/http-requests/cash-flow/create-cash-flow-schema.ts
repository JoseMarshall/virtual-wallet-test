import joi from 'joi';

import { CashFlow } from '../../../../constants';
import { ICashFlowInput } from '../../../../entities/cash-flow/cash-flow.types';
import { floatNumberRegex } from '../../../../utils/regex';
import joiValidator from '../../../index';

const createCashFlowSchema = joi
  .object({
    [CashFlow.Sender]: joi.string().uuid({ version: 'uuidv4' }).required(),
    [CashFlow.Receiver]: joi.string().uuid({ version: 'uuidv4' }).required(),
    [CashFlow.CategoryId]: joi.string().uuid({ version: 'uuidv4' }).required(),
    [CashFlow.Value]: joi
      .alternatives()
      .try(joi.number().options({ convert: false }), joi.string().pattern(floatNumberRegex))
      .required(),
  })
  .required()
  .unknown(false);

export default joiValidator<ICashFlowInput>(createCashFlowSchema);
