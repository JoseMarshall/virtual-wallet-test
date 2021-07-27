import { CashFlowObservation } from '../../constants';
import { Entity } from '../entity.types';

export interface ICashFlowObservation extends Entity {
  [CashFlowObservation.Description]: string;
  [CashFlowObservation.CashFlowId]: string;
}

export interface ICashFlowObservationInput {
  descriptions: string[];
  [CashFlowObservation.CashFlowId]: string;
}
