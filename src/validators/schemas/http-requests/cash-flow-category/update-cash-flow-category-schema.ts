import joi from 'joi';

import { CashFlowCategory } from '../../../../constants';
import joiValidator from '../../../index';
import { UpdateCashFlowCategory } from '../../../types/cash-flow-category';
import { idSchema } from '../sub-schemas';

const createCashFlowCategorySchema = joi
  .object({
    body: joi
      .object({
        [CashFlowCategory.Name]: joi.string().required(),
      })
      .required()
      .unknown(false),
    params: idSchema,
  })
  .required()
  .unknown(true);

export default joiValidator<UpdateCashFlowCategory>(createCashFlowCategorySchema);
