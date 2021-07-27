import joi from 'joi';

import joiValidator from '../../../index';
import { GetOneWallet } from '../../../types/wallet';
import { idSchema } from '../sub-schemas';

const getOneWalletSchema = joi.object(idSchema).required().unknown(false);

export default joiValidator<GetOneWallet>(getOneWalletSchema);
