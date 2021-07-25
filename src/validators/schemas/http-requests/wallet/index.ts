import { HttpRequest } from '../../../../controllers/controllers.types';
import createWalletSchemaValidator from './create-wallet-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateWalletValidator = () => async (req: HttpRequest) =>
  createWalletSchemaValidator(req);
