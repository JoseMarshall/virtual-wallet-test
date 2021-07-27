import joi from 'joi';

import joiValidator from '../../../index';
import { GetOneCashFlowCategory } from '../../../types/cash-flow-category';
import { idSchema } from '../sub-schemas';

const getAllCashFlowCategorySchema = joi.object(idSchema).required().unknown(false);

export default joiValidator<GetOneCashFlowCategory>(getAllCashFlowCategorySchema);
