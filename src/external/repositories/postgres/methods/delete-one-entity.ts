import { Common, TimeStamps } from '../../../../constants';
import { queryGuard } from '../helpers/pg-helper';
import { DeletedEntity, MakeDeleteOneEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeDeleteOneEntity({ model }: MakeDeleteOneEntityData) {
  return async (query: { id: string }) => {
    const [_, docs] = await queryGuard(
      model.update(
        { isDeleted: true },
        { where: { id: query.id, isDeleted: false }, returning: true }
      )
    );

    return {
      [Common.Id]: docs[0][Common.Id],
      [Common.IsDeleted]: docs[0][Common.IsDeleted],
      [TimeStamps.CreatedAt]: docs[0][TimeStamps.CreatedAt],
      [TimeStamps.UpdatedAt]: docs[0][TimeStamps.UpdatedAt],
    } as DeletedEntity;
  };
}
