import apiMessages from '../../locales/pt/api-server.json';
import { HttpRequest } from '../controllers.types';
import { MakeGetAllEntitiesDependencies } from './get-all-entities.types';

function makeGetAllEntitiesController<D, K>({
  findAll,
  requestValidator,
  queryFormatter,
}: MakeGetAllEntitiesDependencies<D, K>) {
  return async (req: HttpRequest) => {
    const validatedQuery = await requestValidator(req);

    const result = await findAll(queryFormatter ? queryFormatter(validatedQuery) : validatedQuery);

    return {
      status: 200,
      body: result.payload,
      msg: {
        i18nCode: 'S-3004',
        defaultValue: apiMessages['S-3004'],
      },
    };
  };
}

export default makeGetAllEntitiesController;
