import { DataTypes, ModelAttributes } from 'sequelize';

import { CashFlowCategory, CollectionNames } from '../../../../constants';
import { PostgreHelper } from '../helpers/pg-helper';
import { entitySchema } from './sub-schemas';

const cashFlowCategorySchema: ModelAttributes = {
  ...entitySchema,
  [CashFlowCategory.Name]: {
    type: DataTypes.STRING(),
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
