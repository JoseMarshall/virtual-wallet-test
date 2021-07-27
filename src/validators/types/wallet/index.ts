import { Common, Wallet } from '../../../constants';
import { GetAll } from '../sub-types';

export interface UpdateWallet {
  body: {
    [Wallet.Currency]?: string;
    [Wallet.CurrentValue]?: string;
  };
  params: { [Common.Id]: string };
}

export interface GetAllWallets extends GetAll {
  [Common.Id]?: string;
  [Wallet.CurrentValue]?: string;
  [Wallet.Currency]?: string;
}

export interface GetOneWallet {
  [Common.Id]: string;
}

export interface DeleteOneWallet {
  [Common.Id]: string;
}
