import { Common, TimeStamps, Wallet } from '../../constants';

export interface IWallet {
  [Common.Id]: string;
  [Wallet.Currency]: string;
  [Wallet.CurrentValue]: number;
  [TimeStamps.CreatedAt]: string;
  [TimeStamps.UpdatedAt]: string;
  [Common.IsDeleted]: boolean;
}

export type IWalletInput = Pick<IWallet, Wallet.Currency | Wallet.CurrentValue>;
