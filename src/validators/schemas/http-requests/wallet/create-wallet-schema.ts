import joi from 'joi';

import joiValidator from '../../../index';
import { IWalletInput } from '../../../../entities/wallet/wallet.types';
import { Currencies, Wallet } from '../../../../constants';
import { floatNumberRegex } from '../../../../utils/regex';

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
