import { CashFlow } from '../../constants';
import { Entity } from '../entity.types';

export interface ICashFlow extends Entity {
  [CashFlow.Sender]: string;
  [CashFlow.Receiver]: string;
  [CashFlow.Value]: string;
  [CashFlow.CategoryId]?: string;
}

export type ICashFlowInput = Omit<ICashFlow, keyof Entity>;
