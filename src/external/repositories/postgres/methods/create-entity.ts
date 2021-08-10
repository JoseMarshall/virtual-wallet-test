import { queryGuard } from '../helpers/pg-helper';
import { MakeCreateEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeCreateEntity<T>({ model, transaction }: MakeCreateEntityData) {
  return async (body: T) => {
    const doc = await queryGuard<T>(model.create(body, { transaction }));
    return doc;
  };
}
