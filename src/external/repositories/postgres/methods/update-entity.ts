import { queryGuard } from '../helpers/pg-helper';
import { MakeUpdateOneEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeUpdateOneEntity<K extends { query: { id: string }; body: unknown }>({
  model,
}: MakeUpdateOneEntityData) {
  return async (req: K) => {
    const [_, docs] = await queryGuard(
      model.update(req.body, { where: { id: req.query.id, isDeleted: false }, returning: true })
    );

    return docs[0];
  };
}
