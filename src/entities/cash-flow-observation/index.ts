import { v4 as uuid } from 'uuid';

import { CashFlowObservation, Common, TimeStamps } from '../../constants';

interface _ICashFlowObservationInput {
  [CashFlowObservation.Description]: string;
  [CashFlowObservation.CashFlowId]: string;
}

// eslint-disable-next-line import/prefer-default-export
export const makeCashFlowObservation = (data: _ICashFlowObservationInput) => ({
  [Common.Id]: uuid(),
  ...data,
  [Common.IsDeleted]: false,
  [TimeStamps.CreatedAt]: new Date().toISOString(),
  [TimeStamps.UpdatedAt]: new Date().toISOString(),
});
