import apiMessages from '../../locales/pt/api-server.json';
import { HttpRequest } from '../controllers.types';
import { MakeUpdateEntityDependencies } from './update-entity.types';

function makeUpdateEntityController<D, K>({
  update,
  requestValidator,
}: MakeUpdateEntityDependencies<D, K>) {
  return async (req: HttpRequest) => {
    const validatedReq = await requestValidator(req);
    const result = await update(validatedReq);

    return {
      status: 201,
      body: result.payload,
      msg: {
        i18nCode: 'S-3003',
        defaultValue: apiMessages['S-3003'],
      },
    };
  };
}

export default makeUpdateEntityController;
