import { DataTypes, ModelAttributes } from 'sequelize';

import { CashFlowCategory, CollectionNames, Common, TimeStamps } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';

const cashFlowCategorySchema: ModelAttributes = {
  [Common.Id]: {
    type: DataTypes.STRING(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  [CashFlowCategory.Name]: {
    type: DataTypes.STRING(),
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

const cashFlowCategoryModel = PostgreHelper.getModel(
  CollectionNames.CashFlowCategories,
  cashFlowCategorySchema,
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await cashFlowCategoryModel.sync({ alter: process.env.NODE_ENV !== 'production' });
})();

export default cashFlowCategoryModel;
