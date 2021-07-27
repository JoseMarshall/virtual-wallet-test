import { v4 as uuid } from 'uuid';

import { Common, TimeStamps } from '../../constants';
import { ICashFlowCategoryInput } from './cash-flow-category.types';

// eslint-disable-next-line import/prefer-default-export
export const makeCashFlowCategory = (data: ICashFlowCategoryInput) => ({
  [Common.Id]: uuid(),
  ...data,
  [Common.IsDeleted]: false,
  [TimeStamps.CreatedAt]: new Date().toISOString(),
  [TimeStamps.UpdatedAt]: new Date().toISOString(),
});
