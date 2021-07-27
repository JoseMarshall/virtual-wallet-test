import { v4 as uuid } from 'uuid';

import { Common, TimeStamps } from '../../constants';
import { ICashFlowInput } from './cash-flow.types';

// eslint-disable-next-line import/prefer-default-export
export const makeCashFlow = (data: ICashFlowInput) => ({
  [Common.Id]: uuid(),
  ...data,
  [Common.IsDeleted]: false,
  [TimeStamps.CreatedAt]: new Date().toISOString(),
  [TimeStamps.UpdatedAt]: new Date().toISOString(),
});
