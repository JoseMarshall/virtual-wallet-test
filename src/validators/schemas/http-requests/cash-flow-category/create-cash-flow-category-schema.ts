import joi from 'joi';

import { CashFlowCategory } from '../../../../constants';
import { ICashFlowCategoryInput } from '../../../../entities/cash-flow-category/cash-flow-category.types';
import joiValidator from '../../../index';

const createCashFlowCategorySchema = joi
  .object({
    [CashFlowCategory.Name]: joi.string().required(),
  })
  .required()
  .unknown(false);

export default joiValidator<ICashFlowCategoryInput>(createCashFlowCategorySchema);
