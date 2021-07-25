import { queryGuard } from '../helpers/pg-helper';
import { MakeGetOneEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeGetOneEntity<K>({ model, options }: MakeGetOneEntityData<K>) {
  return async (query: { id: string; includeDeleted?: string }) => {
    const { id, includeDeleted, ...q } = query;
    const doc = await queryGuard<K>(
      model.findOne({
        where: includeDeleted ? { id, ...q } : { id, isDeleted: false, ...q },
        attributes: options.projection,
        include: options.include,
      })
    );

    return options.formatData ? options.formatData(doc) : doc;
  };
}
