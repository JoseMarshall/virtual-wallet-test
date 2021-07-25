import { DataTypes, ModelAttributes } from 'sequelize';

import { CashFlow, CollectionNames, Common, TimeStamps } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';

const cashFlowSchema: ModelAttributes = {
  [Common.Id]: {
    type: DataTypes.STRING(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  [CashFlow.WalletId]: {
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
    allowNull: false,
  },
  [CashFlow.TransactionId]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.Transactions,
    },
    allowNull: false,
  },
  [CashFlow.Debit]: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
  },
  [CashFlow.Credit]: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
  },
  [CashFlow.Obs]: {
    type: DataTypes.STRING(),
  },
  [TimeStamps.CreatedAt]: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  [TimeStamps.UpdatedAt]: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  [Common.IsDeleted]: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
};

const cashFlowModel = PostgreHelper.getModel(CollectionNames.CashFlows, cashFlowSchema, {
  freezeTableName: true,
  timestamps: false,
});

(async () => {
  await cashFlowModel.sync({ alter: process.env.NODE_ENV !== 'production' });
})();

export default cashFlowModel;
