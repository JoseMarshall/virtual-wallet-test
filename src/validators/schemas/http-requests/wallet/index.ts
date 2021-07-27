import { HttpRequest } from '../../../../controllers/controllers.types';
import createWalletSchemaValidator from './create-wallet-schema';
import getAllWalletsSchemaValidator from './get-all-wallets-schema';
import getOneWalletSchemaValidator from './get-one-wallet-schema';

// eslint-disable-next-line import/prefer-default-export
export const makeCreateWalletValidator = () => async (req: HttpRequest) =>
  createWalletSchemaValidator(req.body);

export const makeGetAllWalletsValidator = () => async (req: HttpRequest) =>
  getAllWalletsSchemaValidator(req.query);

export const makeGetOneWalletValidator = () => async (req: HttpRequest) =>
  getOneWalletSchemaValidator(req.params);
