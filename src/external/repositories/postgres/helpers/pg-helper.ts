import { ModelAttributes, ModelOptions, Sequelize } from 'sequelize';

import { logger } from '../../../../utils';

let sequelize: Sequelize | undefined;

export const PostgreHelper = {
  async connect(): Promise<void> {
    sequelize = new Sequelize(process.env.POSTGRES_URI!);
  },
  getModel(name: string, schema: ModelAttributes, options?: ModelOptions) {
    return sequelize?.models[name] ?? sequelize.define(name, schema, options);
  },
};

export async function queryGuard<T = any>(fn: any): Promise<T> {
  const data = await fn;
  if (!data) throw new Error();

  return data;
}

if (!sequelize) {
  PostgreHelper.connect()
    .then()
    .catch(error => {
      logger.error(error);
      if (process.env.NODE_ENV !== 'test') {
        process.exit(1);
      }
    });
}
