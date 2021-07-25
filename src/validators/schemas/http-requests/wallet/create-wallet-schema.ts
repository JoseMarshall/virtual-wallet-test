import joi from 'joi';

import { Currencies, Wallet } from '../../../../constants';
import { IWalletInput } from '../../../../entities/wallet/wallet.types';
import { floatNumberRegex } from '../../../../utils/regex';
import joiValidator from '../../../index';

const createWalletSchema = joi
  .object({
    [Wallet.Currency]: joi
      .string()
      .valid(...Object.values(Currencies))
      .required(),
    [Wallet.CurrentValue]: joi
      .alternatives()
      .try(joi.number().options({ convert: false }), joi.string().pattern(floatNumberRegex))
      .required(),
  })
  .required()
  .unknown(false);

export default joiValidator<IWalletInput>(createWalletSchema);
