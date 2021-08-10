import { DataTypes, ModelAttributes } from 'sequelize';

import { CashFlow, CollectionNames, Common } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';
import { entitySchema } from './sub-schemas';

const cashFlowSchema: ModelAttributes = {
  ...entitySchema,
  [CashFlow.Sender]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.Wallets,
    },
    allowNull: false,
  },
  [CashFlow.Receiver]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.Wallets,
    },
    allowNull: false,
  },
  [CashFlow.CategoryId]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.CashFlowCategories,
    },
    allowNull: true,
  },
  [CashFlow.Value]: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
  },
};

const cashFlowModel = PostgreHelper.getModel(CollectionNames.CashFlows, cashFlowSchema, {
  freezeTableName: true,
  timestamps: false,
});

(async () => {
  await cashFlowModel.sync({ alter: process.env.NODE_ENV !== 'production', logging: false });
})();

export default cashFlowModel;
