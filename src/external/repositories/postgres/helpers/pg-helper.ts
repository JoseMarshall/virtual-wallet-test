import { ConnectionError, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';

let sequelize: Sequelize | undefined;

export const PostgreHelper = {
  async connect(): Promise<void> {
    const connectionStr = `${process.env.DATABASE_DIALECT}://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_CATALOG}`;

    try {
      sequelize = new Sequelize(connectionStr);
    } catch (error) {
      if (error instanceof ConnectionError) {
        // Retries the connection attempt every 5 seconds
        setTimeout(() => {
          sequelize = new Sequelize(connectionStr);
        }, 5000);
      }
    }
  },
  getModel(name: string, schema: ModelAttributes, options?: ModelOptions) {
    return sequelize?.models[name] ?? sequelize.define(name, schema, options);
  },

  getInstance() {
    return sequelize;
  },
};

export async function queryGuard<T = any>(fn: Promise<T>) {
  const data = await fn;
  if (!data) throw new Error();

  return data;
}
