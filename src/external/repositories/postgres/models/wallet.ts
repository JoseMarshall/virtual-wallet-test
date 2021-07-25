import { DataTypes, ModelAttributes } from 'sequelize';

import { CollectionNames, Common, Currencies, TimeStamps, Wallet } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';

const walletSchema: ModelAttributes = {
  [Common.Id]: {
    type: DataTypes.STRING(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  [Wallet.CurrentValue]: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false,
  },
  [Wallet.Currency]: {
    type: DataTypes.STRING(3),
    allowNull: false,
    defaultValue: Currencies.BRL,
    values: Object.values(Currencies),
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

const walletModel = PostgreHelper.getModel(CollectionNames.Wallets, walletSchema, {
  freezeTableName: true,
  timestamps: false,
});

(async () => {
  await walletModel.sync({ alter: process.env.NODE_ENV !== 'production' });
})();

export default walletModel;
