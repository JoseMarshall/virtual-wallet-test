import { HttpRequest } from '../../../../controllers/controllers.types';
import { queryGuard } from '../helpers/pg-helper';
import { MakeUpdateOneEntityData } from '../postgres.types';

// eslint-disable-next-line import/prefer-default-export
export function makeUpdateOneEntity<
  T,
  K extends Omit<HttpRequest, 'query'> = { params: { id: string }; body: any }
>({ model }: MakeUpdateOneEntityData) {
  return async (req: K) => {
    const [_, docs] = await queryGuard<[number, T[]]>(
      model.update(req.body, { where: { id: req.params.id, isDeleted: false }, returning: true })
    );

    return docs[0];
  };
}
