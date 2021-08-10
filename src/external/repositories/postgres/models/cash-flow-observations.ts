import { DataTypes, ModelAttributes } from 'sequelize';

import { CashFlowObservation, CollectionNames, Common } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';
import { entitySchema } from './sub-schemas';

const cashFlowObservationSchema: ModelAttributes = {
  ...entitySchema,
  [CashFlowObservation.Description]: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  [CashFlowObservation.CashFlowId]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.CashFlows,
    },
    allowNull: false,
  },
};

const cashFlowObservationModel = PostgreHelper.getModel(
  CollectionNames.CashFlowObservations,
  cashFlowObservationSchema,
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await cashFlowObservationModel.sync({
    alter: process.env.NODE_ENV !== 'production',
    logging: false,
  });
})();

export default cashFlowObservationModel;
