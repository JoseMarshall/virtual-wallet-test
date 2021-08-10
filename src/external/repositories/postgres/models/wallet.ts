import { DataTypes, ModelAttributes } from 'sequelize';

import { CollectionNames, Currencies, Wallet } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';
import { entitySchema } from './sub-schemas';

const walletSchema: ModelAttributes = {
  ...entitySchema,
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
};

const walletModel = PostgreHelper.getModel(CollectionNames.Wallets, walletSchema, {
  freezeTableName: true,
  timestamps: false,
});

(async () => {
  await walletModel.sync({ alter: process.env.NODE_ENV !== 'production', logging: false });
})();

export default walletModel;
