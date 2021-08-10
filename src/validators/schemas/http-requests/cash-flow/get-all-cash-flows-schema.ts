import joi from 'joi';

import { CashFlow, TimeStamps } from '../../../../constants';
import { dateRangeRegex } from '../../../../utils/regex';
import joiValidator from '../../../index';
import { GetAllCashFlows } from '../../../types/cash-flow';
import { getAllSchema } from '../sub-schemas';

const getAllCashFlowSchema = joi
  .object(getAllSchema)
  .append({
    [CashFlow.Sender]: joi.string().uuid({ version: 'uuidv4' }),
    [CashFlow.Receiver]: joi.string().uuid({ version: 'uuidv4' }),
    [TimeStamps.UpdatedAt]: joi.string().pattern(dateRangeRegex),
  })
  .required()
  .unknown(false);

export default joiValidator<GetAllCashFlows>(getAllCashFlowSchema);
