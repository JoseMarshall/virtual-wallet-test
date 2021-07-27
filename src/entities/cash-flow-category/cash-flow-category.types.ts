import { CashFlowCategory } from '../../constants';
import { Entity } from '../entity.types';

export interface ICashFlowCategory extends Entity {
  [CashFlowCategory.Name]: string;
}

export type ICashFlowCategoryInput = Omit<ICashFlowCategory, keyof Entity>;
