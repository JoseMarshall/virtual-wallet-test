import { CashFlow, Wallet } from '../../constants';
import { Entity } from '../entity.types';

export interface IWallet extends Entity {
  [Wallet.Currency]: string;
  [Wallet.CurrentValue]: number;
}

export interface ITansferAmount {
  [CashFlow.Receiver]: string;
  [CashFlow.Sender]: string;
  [CashFlow.Value]: string;
}

export type IWalletInput = Omit<IWallet, keyof Entity>;
