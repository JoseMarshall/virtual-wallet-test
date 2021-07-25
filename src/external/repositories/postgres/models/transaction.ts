import { DataTypes, ModelAttributes } from 'sequelize';

import { CollectionNames, Common, TimeStamps, Transaction } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';

const transactionSchema: ModelAttributes = {
  [Common.Id]: {
    type: DataTypes.STRING(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  [Transaction.Sender]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.Wallets,
    },
    allowNull: false,
  },
  [Transaction.Receiver]: {
    type: DataTypes.STRING(36),
    references: {
      key: Common.Id,
      model: CollectionNames.Wallets,
    },
    allowNull: false,
  },
  [Transaction.Value]: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
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

const TransactionModel = PostgreHelper.getModel(CollectionNames.Transactions, transactionSchema, {
  freezeTableName: true,
  timestamps: false,
});

(async () => {
  await TransactionModel.sync({ alter: process.env.NODE_ENV !== 'production' });
})();

export default TransactionModel;
