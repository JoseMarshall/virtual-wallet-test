import { queryGuard } from '../helpers/pg-helper';
import { MakeCreateEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeCreateManyEntities<T>({ model }: MakeCreateEntityData) {
  return async (body: T[]) => {
    const docs = await queryGuard<T[]>(model.bulkCreate(body));
    return docs;
  };
}
