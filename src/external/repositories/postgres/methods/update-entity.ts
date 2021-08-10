import { Entity } from '../../../../entities/entity.types';
import { GetOne } from '../../../../validators/types/sub-types';
import { queryGuard } from '../helpers/pg-helper';
import { MakeUpdateOneEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeUpdateOneEntity<T>({ model, transaction }: MakeUpdateOneEntityData) {
  return async (query: GetOne, body: Omit<Record<string, any>, keyof Entity>) => {
    const [_, docs] = await queryGuard<[number, T[]]>(
      model.update(body, {
        where: { id: query.id, isDeleted: false },
        returning: true,
        transaction,
      })
    );

    return docs[0];
  };
}
