import { v4 as uuid } from 'uuid';

import { Common, TimeStamps } from '../../constants';
import { IWalletInput } from './wallet.types';

// eslint-disable-next-line import/prefer-default-export
export const makeWallet = (data: IWalletInput) => ({
  [Common.Id]: uuid(),
  ...data,
  [Common.IsDeleted]: false,
  [TimeStamps.CreatedAt]: new Date().toISOString(),
  [TimeStamps.UpdatedAt]: new Date().toISOString(),
});
