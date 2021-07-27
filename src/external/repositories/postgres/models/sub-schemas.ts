import { DataTypes, ModelAttributes } from 'sequelize';

import { Common, TimeStamps } from '../../../../constants';

// eslint-disable-next-line import/prefer-default-export
export const entitySchema: ModelAttributes = {
  [Common.Id]: {
    type: DataTypes.STRING(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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
