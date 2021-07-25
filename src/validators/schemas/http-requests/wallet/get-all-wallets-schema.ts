import joi from 'joi';

import { Common, Currencies, Wallet } from '../../../../constants';
import { floatNumberRegex } from '../../../../utils/regex';
import joiValidator from '../../../index';
import { GetAllWallets } from '../../../types/wallet';
import { getAllSchema, idSchema } from '../sub-schemas';

const getAllWalletsSchema = joi
  .object(getAllSchema)
  .append({
    [Common.Id]: idSchema.id.optional(),
    [Wallet.Currency]: joi.string().valid(...Object.values(Currencies)),
    [Wallet.CurrentValue]: joi
      .alternatives()
      .try(joi.number().options({ convert: false }), joi.string().pattern(floatNumberRegex)),
  })
  .required()
  .unknown(false);

export default joiValidator<GetAllWallets>(getAllWalletsSchema);
