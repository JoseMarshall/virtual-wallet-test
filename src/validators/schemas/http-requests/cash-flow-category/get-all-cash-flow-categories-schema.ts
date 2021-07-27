import joi from 'joi';

import { CashFlowCategory } from '../../../../constants';
import joiValidator from '../../../index';
import { GetAllCashFlowCategories } from '../../../types/cash-flow-category';
import { getAllSchema } from '../sub-schemas';

const getAllCashFlowCategorySchema = joi
  .object(getAllSchema)
  .append({
    [CashFlowCategory.Name]: joi.string(),
  })
  .required()
  .unknown(false);

export default joiValidator<GetAllCashFlowCategories>(getAllCashFlowCategorySchema);
