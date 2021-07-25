import { HttpRequest } from '../../../../controllers/controllers.types';
import createWalletSchemaValidator from './create-wallet-schema';
import getAllWalletsSchemaValidator from './get-all-wallets-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateWalletValidator = () => async (req: HttpRequest) =>
  createWalletSchemaValidator(req);

export const makeGetAllWalletsValidator = () => async (req: HttpRequest) =>
  getAllWalletsSchemaValidator(req.query);
