import { CashFlow, Common, TimeStamps } from '../../../constants';
import { GetAll } from '../sub-types';

export interface GetAllCashFlows extends GetAll {
  [CashFlow.Sender]?: string;
  [CashFlow.Receiver]?: string;
  [TimeStamps.UpdatedAt]?: string;
}

export interface GetOneCashFlow {
  [Common.Id]: string;
}
